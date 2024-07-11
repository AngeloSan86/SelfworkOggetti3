let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    
    classifica : function(){
        bowling.players.forEach((player)=>console.log(`NOME: ${player.name} PUNTEGGIO: ${player.scores}.`));
    },
    
    addNewPlayer : function(name) {
        let newPlayer = { "name" : name, "scores": [] };
        
        let playerAdded = bowling.players.splice(0, 0, newPlayer);
        
        console.log(`Il giocatore ${name} è entrato in partita!`); 

        bowling.classifica();
    },
    
    partita : function(){
        for(let i =0; i<10; i++){
            bowling.players.forEach((player)=>player.scores.splice(0,0, Math.floor(Math.random() * (10 - 1 +1) + 1)));
        };
        
    },
    
    classificaGiocatori : function() {

        let somma = bowling.players.map((player)=>player.scores.reduce((acc, n)=> acc + n));

        for(let i = 0; i < somma.length; i++){
           bowling.players[i].scores = somma[i];
        }

        return somma;
    },


    finalScore : function(){
       let classFin = bowling.players.sort((a,b)=> b.scores-a.scores);

       console.log(`CLASSIFICA FINALE!!!`);

       let classificaDef = classFin.forEach((giocatore, i)=>console.log(`${i+1} POSIZIONE:${giocatore.name} - PUNTI:${giocatore.scores}` ));
    }
    
}

bowling.classifica();

bowling.addNewPlayer("Pikachu");

bowling.partita();

bowling.classifica();

bowling.classificaGiocatori();

bowling.classifica();

bowling.finalScore();


