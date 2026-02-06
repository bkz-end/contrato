document.addEventListener('DOMContentLoaded', function() {
    const signButton = document.getElementById('signButton');
    const confirmation = document.getElementById('confirmation');
    const confettiContainer = document.getElementById('confetti-container');

    signButton.addEventListener('click', function() {
        // Criar confete
        createConfetti();
        
        // Mostrar confirmação após um pequeno delay
        setTimeout(() => {
            confirmation.classList.remove('hidden');
        }, 500);

        // Esconder confirmação após 5 segundos
        setTimeout(() => {
            confirmation.classList.add('hidden');
        }, 5000);
    });

    // Fechar confirmação ao clicar nela
    confirmation.addEventListener('click', function() {
        confirmation.classList.add('hidden');
    });

    function createConfetti() {
        const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#e67e22'];
        const emojis = ['🎉', '🎊', '🎈', '🎭', '😂', '🍇', '✨', '🌟'];
        const confettiCount = 150;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                
                // Misturar confete colorido com emojis
                if (Math.random() > 0.6) {
                    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    confetti.style.fontSize = '20px';
                } else {
                    confetti.className = 'confetti';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                }
                
                confetti.style.position = 'absolute';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confetti.style.animation = 'confetti-fall ' + (Math.random() * 2 + 2) + 's linear forwards';
                
                // Formas diferentes de confete
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else {
                    confetti.style.transform += ' rotate(' + (Math.random() * 360) + 'deg)';
                }

                confettiContainer.appendChild(confetti);

                // Remover confete após a animação
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }, i * 15);
        }
        
        // Som de celebração (simulado com vibração se disponível)
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }
    }

    // Easter egg: adicionar efeito de hover nas cláusulas
    const clauses = document.querySelectorAll('.clause');
    clauses.forEach(clause => {
        clause.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        clause.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Adicionar efeito de digitação no título
    const title = document.querySelector('.document-header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
});
    // Easter eggs
    let clickCount = 0;
    document.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 10) {
            alert('Você descobriu o easter egg!\n\nVocê é oficialmente viciado em cliques.\n\n(Sério, você não tem nada melhor pra fazer não?)');
        }
        if (clickCount === 50) {
            alert('Cara... você já clicou 50 vezes...\n\nTá tudo bem aí? Precisa conversar?');
        }
    });

    // Efeito especial nas multas
    const penalties = document.querySelectorAll('.clause-penalty');
    penalties.forEach(penalty => {
        penalty.addEventListener('click', function() {
            this.style.animation = 'wiggle 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            const messages = [
                'Multa aplicada com sucesso!\n\n(Não que você vá pagar mesmo)',
                'Departamento de Multas da Zueira acionado!\n\n(Eles estão ocupados rindo de você)',
                'Justiça da Resenha em ação!\n\n(Spoiler: não existe justiça aqui)',
                'Você foi multado pela Polícia do Humor!\n\n(Eles são tão eficientes quanto parecem)',
                'Dívida registrada no SPC da Zueira!\n\n(Seu score de humor: -100)'
            ];
            
            alert(messages[Math.floor(Math.random() * messages.length)]);
        });
    });

    // Efeito especial no selo
    const seal = document.querySelector('.seal');
    seal.addEventListener('click', function() {
        this.style.animation = 'bounce 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = 'bounce 2s ease-in-out infinite';
        }, 500);
        
        alert('CARTÓRIO DA ZUEIRA\n\nFundado em 2026 para oficializar a diversão!\n\n(E também porque a gente não tinha nada melhor pra fazer)\n\nServiços oferecidos:\n• Registro de amizades duvidosas ✅\n• Certificação de memes ruins ✅\n• Validação de resenhas sem sentido ✅\n• Terapia pós-piada ruim ❌ (isso a gente não cobre)');
    });

    // Contador de risadas
    let laughCount = 0;
    const laughEmojis = ['😂', '🤣', '😆', '😄', '😁', '🤪', '😜'];
    
    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === 'k') {
            laughCount++;
            if (laughCount >= 5) {
                const randomEmoji = laughEmojis[Math.floor(Math.random() * laughEmojis.length)];
                const laughElement = document.createElement('div');
                laughElement.textContent = randomEmoji;
                laughElement.style.position = 'fixed';
                laughElement.style.left = Math.random() * window.innerWidth + 'px';
                laughElement.style.top = Math.random() * window.innerHeight + 'px';
                laughElement.style.fontSize = '30px';
                laughElement.style.zIndex = '9999';
                laughElement.style.animation = 'confetti-fall 2s linear forwards';
                document.body.appendChild(laughElement);
                
                setTimeout(() => {
                    if (laughElement.parentNode) {
                        laughElement.parentNode.removeChild(laughElement);
                    }
                }, 2000);
                
                laughCount = 0;
            }
        }
    });

    // Mensagem especial ao passar o mouse no título
    const title = document.querySelector('.document-header h1');
    title.addEventListener('mouseenter', function() {
        this.title = 'O documento mais importante da sua vida!\n\n(Mentira, mas finge que é)';
    });
    
    // Easter egg: clicar no título
    title.addEventListener('click', function() {
        alert('CONTRATO OFICIAL DE RESENHA\n\nVocê realmente achou que ia ter algo especial aqui?\n\nBom... você não está errado.\n\nMas também não está certo.');
    });

    // Easter egg: tentar copiar o texto
    document.addEventListener('copy', function() {
        alert('Copiando o contrato?\n\nVai mandar pro advogado?\n\n(Spoiler: ele vai rir de você também)');
    });

    // Easter egg: ficar muito tempo na página
    setTimeout(() => {
        alert('Você está aqui há 2 minutos...\n\nSério, você não tem nada melhor pra fazer?\n\n(A gente também não, então tá tudo bem)');
    }, 120000);

    // Easter egg: clicar no aviso
    const warning = document.querySelector('.warning');
    if (warning) {
        warning.addEventListener('click', function() {
            alert('ATENÇÃO: Este documento é legalmente engraçado\n\nOu pelo menos a gente tentou.\n\nSe você não riu, o problema é você.\n\n(Brincadeira, a gente sabe que é ruim mesmo)');
        });
    }

    // Mensagens no console
    console.log('%cCARTÓRIO DA ZUEIRA', 'font-size: 20px; font-weight: bold; color: #e74c3c;');
    console.log('%cOlha só quem veio bisbilhotar o console...', 'font-size: 14px; color: #3498db;');
    console.log('%cVocê é desenvolvedor ou só curioso mesmo?', 'font-size: 12px; color: #2ecc71;');
    console.log('%c(Não que faça diferença, a gente não julga)', 'font-size: 10px; color: #95a5a6; font-style: italic;');
    console.log('%c\nEaster egg secreto: Digite "zueira" no console', 'font-size: 12px; color: #f39c12;');
    
    // Comando secreto no console
    window.zueira = function() {
        console.log('%cVOCÊ DESCOBRIU O COMANDO SECRETO!', 'font-size: 16px; font-weight: bold; color: #e74c3c; background: #fff; padding: 10px;');
        console.log('%cParabéns! Você ganhou... absolutamente nada!', 'font-size: 14px; color: #9b59b6;');
        console.log('%cMas ei, pelo menos você se divertiu, né?', 'font-size: 12px; color: #3498db;');
        console.log('%c(Ou não, a gente não sabe)', 'font-size: 10px; color: #95a5a6; font-style: italic;');
        alert('PARABÉNS!\n\nVocê encontrou o comando secreto!\n\nSeu prêmio: NADA\n\n(Mas você ganhou nosso respeito... ou não)');
    };

