import React from 'react';

const Sobre = () => {
  return (
    <div style={styles.container}>
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo ao nosso site! Este projeto foi desenvolvido com o objetivo de fornecer uma solução prática e eficiente para o controle financeiro. 
      </p>

      <section style={styles.section}>
        <h2>Nossa Missão</h2>
        <p>
          Minha missão é oferecer ferramentas acessíveis que permitam que todos possam gerenciar seu dinheiro com mais clareza e controle. Acreditamos que o controle financeiro é essencial para o sucesso pessoal e empresarial, e estamos comprometidos em fornecer os melhores recursos para isso.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Trabalho Jeferson 1 Bimestre. 2024</h2>
        <p>
          Sou um Desenvolvedor apaixonado por tecnologia e finanças, sempre buscando inovações e melhorias para oferecer a melhor experiência aos nossos usuários.
        </p>
        <ul style={styles.teamList}>
          <li>Lucas Nathan Oliveira de Moura - Fundador e Desenvolvedor Principal</li>
       
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Contato</h2>
        <p>
          Se você tiver dúvidas ou sugestões, entre em contato conosco pelo email: lnomoura@minha.fag.edu.br. Estou sempre abertos para ouvir seu feedback!
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
  teamList: {
    listStyleType: 'none' as 'none',
    paddingLeft: '0',
  },
};

export default Sobre;
