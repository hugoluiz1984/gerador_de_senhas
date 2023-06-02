import { Button, BottomNavigation,BottomNavigationAction, Slider, Switch, FormControl, FormLabel, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react'

const GeradorSenhas = () => {
    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState(10);
    const [primeira, setPrimeira] = useState('1');
    const [cMai, setCMai] = useState(true);
    const [cMin, setCMin] = useState(true);
    const [cNum, setCNum] = useState(true);
    const [cEsp, setCEsp] = useState(true);
    const min = 'abcdefghijklmnopqrstuvwxyz';
    const mai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const esp = '!@#$%^&*()';
    const [clip, setClip] = useState(false);
    
    useEffect(() => {
        if (!cMai && !cMin && !cNum && !cEsp) setCMin(true);

    }, [cMai, cMin, cNum, cEsp]);

    const gerarSenha = (length) => {
        let letra
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
        let caracteres = '';
        if (cMai) caracteres = caracteres + mai;
        if (cMin) caracteres = caracteres + min;
        if (cNum) caracteres = caracteres + num;
        if (cEsp) caracteres = caracteres + esp;
        console.log(caracteres);
    //const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const senhaGerada = Array.from({ length: length }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join(''); 
    setSenha(letra+senhaGerada);
    setClip(false);
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
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Tipos de caracteres:</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Switch checked={cMai} onChange={() => { setCMai(!cMai)}} name="mai" />
                    }
                    label="Maiúsculas"
                    />
                    <FormControlLabel
                    control={
                        <Switch checked={cMin} onChange={() => { setCMin(!cMin)}} name="min" />
                    }
                    label="Minúscula"
                    />
                    <FormControlLabel
                    control={
                        <Switch checked={cNum} onChange={() => { setCNum(!cNum)}} name="Num" />
                    }
                    label="Numeral"
                      />
                    <FormControlLabel
                    control={
                        <Switch checked={cEsp} onChange={() => { setCEsp(!cEsp)}} name="mai" />
                    }
                    label="Especiais"
                    />
                </FormGroup>
              </FormControl>
                
          </div>
                        <Button variant="contained" onClick={() => gerarSenha(tamanho-1)}>Gerar Senha</Button>
          <div>
              <p>{senha}</p>
              <Button
                  disabled={senha==''?true:false}
                  onClick={() => { navigator.clipboard.writeText(senha);setClip(true) }}
              >
                  Copiar
              </Button>
                <p>{clip&& 'Senha copiada para o clipboard'}</p>
              </div>
        
    </div>
  )
}

export default GeradorSenhas