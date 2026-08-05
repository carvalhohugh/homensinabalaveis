import { NextResponse } from "next/server";
import { findBestAdvice, bibleDatabase } from "@/lib/bible-database";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Texto não fornecido ou inválido." },
        { status: 400 }
      );
    }

    // Procura no banco de dados local por palavras-chave
    const advice = findBestAdvice(text);

    if (advice) {
      return NextResponse.json({
        success: true,
        data: advice,
      });
    }

    // Fallback genérico se nenhuma palavra-chave for encontrada
    return NextResponse.json({
      success: true,
      data: {
        verse: "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
        reference: "Jeremias 29:11",
        application: "Deus tem o controle soberano sobre todas as situações. Quando não sabemos como agir, a nossa primeira atitude deve ser a busca pela direção dEle.",
        counsel: "Continue acompanhando este homem em oração. Peça sabedoria a Deus para lidar com as áreas que ainda não estão claras."
      },
    });

  } catch (error) {
    console.error("Erro na API da Bíblia:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
