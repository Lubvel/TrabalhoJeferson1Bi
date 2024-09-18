import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Nosso Site!</h1>
      <p>
        Este site foi criado para ajudar você a gerenciar suas finanças de maneira eficiente e simples. Nossa plataforma oferece diversas ferramentas para facilitar o controle do seu dinheiro, seja para o uso pessoal ou para o seu negócio.
      </p>

      <section style={styles.section}>
        <h2>Como Funciona</h2>
        <p>
          A nossa solução permite que você acompanhe suas receitas e despesas, categorizando cada transação. Você poderá visualizar seus gastos por mês, planejar melhor seu orçamento e tomar decisões financeiras mais conscientes.
        </p>
        <p>
          Com gráficos visuais e relatórios detalhados, você terá uma visão clara de suas finanças e poderá acompanhar seu progresso ao longo do tempo.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Principais Funcionalidades</h2>
        <ul style={styles.featureList}>
          <li>✅ Controle de receitas e despesas</li>
          <li>✅ Visualização de transações por categorias</li>
          <li>✅ Gráficos para análise financeira</li>
          <li>✅ Relatórios detalhados por mês</li>
          <li>✅ Integração com plataformas de pagamento</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Por que Usar?</h2>
        <p>
          Se você deseja organizar suas finanças, seja para entender melhor seus hábitos de consumo ou para poupar mais, nossa plataforma é ideal para você. Com ferramentas práticas e intuitivas, você conseguirá gerenciar seu orçamento de forma eficaz e atingir suas metas financeiras.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Comece Agora!</h2>
        <p>
          Não perca mais tempo! Crie sua conta e comece a controlar suas finanças de maneira simples e prática. Se você já tem uma conta, faça login e tenha acesso completo às suas informações.
        </p>
      </section>
    </div>
  );
};

// Estilos inline simples
const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'left' as 'left',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '30px',
  },
  featureList: {
    listStyleType: 'none' as 'none',
    paddingLeft: '0',
  },
};

export default Home;
