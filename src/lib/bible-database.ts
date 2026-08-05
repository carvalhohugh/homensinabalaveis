export interface BiblicalAdvice {
  keywords: string[];
  verse: string;
  reference: string;
  application: string;
  counsel: string;
}

export const bibleDatabase: BiblicalAdvice[] = [
  {
    keywords: ["casamento", "briga", "esposa", "divórcio", "discussão", "desentendimento"],
    verse: "Maridos, amem suas mulheres, assim como Cristo amou a igreja e entregou-se a si mesmo por ela.",
    reference: "Efésios 5:25",
    application: "O amor bíblico não é um sentimento passivo, mas uma ação sacrificial. A liderança no casamento exige que você dê o primeiro passo para a reconciliação, abrindo mão do seu orgulho em prol da unidade.",
    counsel: "Seja o primeiro a pedir perdão, mesmo que você ache que tem a razão. Não deixe que pequenas discussões abram portas para o ressentimento. O verdadeiro homem inabalável protege sua casa liderando pelo serviço."
  },
  {
    keywords: ["depressão", "tristeza", "desânimo", "suicídio", "vazio", "dor"],
    verse: "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
    reference: "Salmos 34:18",
    application: "Deus não abandona você nos seus momentos mais sombrios. A dor que você sente hoje não é o seu destino final, mas um momento de profundo encontro com a graça curadora dEle.",
    counsel: "Não lute contra a depressão sozinho no escuro. Traga isso para a luz, converse com seu mentor e busque ajuda médica se necessário. Fé e tratamento andam juntos."
  },
  {
    keywords: ["ansiedade", "preocupação", "medo", "futuro", "pânico"],
    verse: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
    reference: "Filipenses 4:6",
    application: "A ansiedade é o excesso de futuro na sua mente. A Bíblia ensina a trocar a preocupação pela oração com gratidão, transferindo o peso do que você não controla para Aquele que controla tudo.",
    counsel: "Tire os olhos do que está fora do seu controle hoje. Foque no agora e no que você pode fazer. Estabeleça uma rotina matinal e entregue seu dia a Deus antes de olhar o celular."
  },
  {
    keywords: ["filhos", "paternidade", "criança", "rebeldia", "educação"],
    verse: "Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles.",
    reference: "Provérbios 22:6",
    application: "A instrução não é apenas dizer o que fazer, mas ser o exemplo vivo. O caráter dos seus filhos será forjado mais pelas suas atitudes diárias do que pelas suas palavras esporádicas.",
    counsel: "Passe tempo de qualidade com eles. Se há rebeldia, responda com firmeza, mas nunca sem amor. Seu filho precisa ver em você um reflexo da paternidade de Deus: segura, presente e imutável."
  },
  {
    keywords: ["sexualidade", "pornografia", "vício", "pureza", "masturbação"],
    verse: "Fujam da imoralidade sexual. Todos os outros pecados que alguém comete, fora do corpo os comete; mas quem peca sexualmente, peca contra o seu próprio corpo.",
    reference: "1 Coríntios 6:18",
    application: "O pecado sexual destrói o templo do Espírito Santo e deturpa o propósito sagrado do sexo no casamento. A ordem bíblica não é 'lutar' contra isso, mas 'fugir', ou seja, cortar o mal pela raiz.",
    counsel: "Instale bloqueadores de conteúdo imediatamente. Não confie na sua própria força de vontade. Confesse seu erro a um irmão de confiança para ter prestação de contas (accountability). Você não pode vencer no escuro."
  },
  {
    keywords: ["finanças", "dinheiro", "dívida", "trabalho", "emprego"],
    verse: "O rico domina sobre o pobre; quem toma emprestado é escravo de quem empresta.",
    reference: "Provérbios 22:7",
    application: "A má gestão financeira escraviza o homem e rouba sua paz. A liberdade financeira começa com a fidelidade a Deus e a administração sábia dos recursos que Ele já lhe confiou.",
    counsel: "Pare de gastar para impressionar os outros. Faça um orçamento hoje, corte gastos supérfluos e comece a pagar suas dívidas. Trabalhe com diligência e honestidade, e Deus abençoará o fruto do seu suor."
  }
];

// Helper para encontrar a melhor correspondência
export function findBestAdvice(text: string): BiblicalAdvice | null {
  const normalizedText = text.toLowerCase();
  let bestMatch = null;
  let maxScore = 0;

  for (const advice of bibleDatabase) {
    let score = 0;
    for (const keyword of advice.keywords) {
      if (normalizedText.includes(keyword)) {
        score++;
      }
    }
    
    if (score > maxScore) {
      maxScore = score;
      bestMatch = advice;
    }
  }

  return bestMatch;
}
