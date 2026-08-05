const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://kqoiwpducjvcnzqwhmlx.supabase.co'
const supabaseKey = 'sb_publishable_adGEaOzaSCT-Q06dwmVOug_onMrQtQ6'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createSuperAdmin() {
  console.log('Tentando criar usuário admin@admin.com...')
  
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@admin.com',
    password: 'super@123',
    options: {
      data: {
        role: 'superadmin'
      }
    }
  })

  if (error) {
    console.error('Erro ao criar usuário:', error.message)
  } else {
    console.log('Usuário criado com sucesso!', data.user?.id)
  }
}

createSuperAdmin()
