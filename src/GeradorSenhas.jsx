import { Slider } from '@mui/material';
import React, { useState } from 'react'

const GeradorSenhas = () => {
    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState(10);
    const gerarSenha = (length) => {
    // Lógica para gerar a senha
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const senhaGerada = Array.from({ length: length }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('');
    setSenha(senhaGerada);
    };
    
    
  return (
    <div>
        <h2>Gerador de Senhas</h2>
          <p>Quantidade de caracteres: {tamanho}</p>
        <Slider
              min={5}
              max={30}
              defaultValue={tamanho}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={(_, newValue) => setTamanho(newValue)}
            />
        <button onClick={()=>gerarSenha(tamanho)}>Gerar Senha</button>
        <p>{senha}</p>
    </div>
  )
}

export default GeradorSenhas