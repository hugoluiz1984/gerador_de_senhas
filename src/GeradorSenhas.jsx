import { Button, BottomNavigation,BottomNavigationAction, Slider } from '@mui/material';
import React, { useState } from 'react'

const GeradorSenhas = () => {
    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState(10);
    const [primeira, setPrimeira] = useState('1');
    const [fLetter, setFLetter] = useState('');
    const min = 'abcdefghijklmnopqrstuvwxyz';
    const mai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789'
    

    const gerarSenha = (length) => {
        var letra
        switch (primeira) {
            case '1':
                const MinGerada = Array.from({ length: 1 }, () => min[Math.floor(Math.random() * min.length)]).join('');
                letra =MinGerada;
                break;
            case '2':
                const MaiGerada = Array.from({ length: 1 }, () => mai[Math.floor(Math.random() * mai.length)]).join('');
                letra = MaiGerada
                break;
            case '3':
                const NumGerada = Array.from({ length: 1 }, () => num[Math.floor(Math.random() * num.length)]).join('');
                letra = NumGerada
                break;
        }
    // Lógica para gerar a senha
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const senhaGerada = Array.from({ length: length }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('');
        
    setSenha(letra+senhaGerada);
    };
    
    
  return (
    <div>
          <h2>Gerador de Senhas</h2>
          <p>Primeiro Caracter</p>
          <BottomNavigation
            showLabels
            defaultValue={primeira}
            value={primeira}
            onChange={(event, newValue) => {
                setPrimeira(newValue);
            }}
          >
                <BottomNavigationAction label="Minúscula" value="1" />
                <BottomNavigationAction label="Maiúscula" value="2"  />
                <BottomNavigationAction label="Numeral" value="3" />            
          </BottomNavigation>



          <div>
              <p>Quantidade de caracteres: {tamanho}</p>
              <Slider
                min={5}
                max={30}
                defaultValue={tamanho}
                value={tamanho}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(_, newValue) => setTamanho(newValue)}
              />
              <Button variant="contained" onClick={() => gerarSenha(tamanho-1)}>Gerar Senha</Button>
              
          </div>
          <div>
              <p>{senha}</p>
              <Button
                  disabled={senha==''?true:false}
                  onClick={() => { navigator.clipboard.writeText(senha) }}
              >
                  Copiar
              </Button>
              </div>
        
    </div>
  )
}

export default GeradorSenhas