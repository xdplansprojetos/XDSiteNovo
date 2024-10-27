import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ThaisData.css';

const ThaisData = () => {
  const initialPosts = [
    { date: '12/09/2024', content: 'Como Avaliar o Valor de um Imóvel', completed: false },
    { date: '12/09/2024', content: 'Como Avaliar o Valor de um Imóvel', completed: false },
    { date: '26/09/2024', content: 'Documentação Necessária para Compra de Imóvel', completed: false },
    { date: '01/10/2024', content: 'Tendências do Mercado Imobiliário em 2024', completed: false },
    { date: '03/10/2024', content: 'Benefícios de Fazer uma Reforma', completed: false },
    { date: '10/10/2024', content: 'Os Melhores Sites para Pesquisa de Imóveis', completed: false },
    { date: '17/10/2024', content: 'A Importância da Avaliação Imobiliária', completed: false },
    { date: '24/10/2024', content: 'Como Funciona o Financiamento Imobiliário', completed: false },
    { date: '31/10/2024', content: 'Como Aumentar o Valor do seu Imóvel', completed: false },
    { date: '05/11/2024', content: 'Cuidados na Compra de Imóveis na Planta', completed: false },
    { date: '07/11/2024', content: 'O que é a Taxa de Juros no Financiamento', completed: false },    
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [posts, setPosts] = useState(initialPosts);

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isSelectedDate = (postDate) => {
    return postDate === formatDate(selectedDate);
  };

  const toggleCompletion = (index) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, completed: !post.completed } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="calendar-container">
      <div className="date-picker">
        <h2>Calendário de Postagens</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          inline
        />
      </div>
      <div className="post-list">
        <h3>Postagens:</h3>
        <ul>
          {posts.map((post, index) => (
            <li
              key={post.date}
              className={`${isSelectedDate(post.date) ? 'highlighted-post' : ''} ${post.completed ? 'completed-post' : ''}`}
            >
              <span onClick={() => toggleCompletion(index)} style={{ cursor: 'pointer' }}>
                {post.date} - {post.content} {post.completed ? '(Concluído)' : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThaisData;
