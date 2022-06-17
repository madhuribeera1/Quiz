let data={
    allquestions:[
        {
            number:'question1',
            id:1,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question2',
            id:2,
            question:'Galileo was an Italian astronomer who',
            answer:'All of the above',
            options:['developed the telescope','discovered four satellites of Jupiter','discovered that the movement of pendulum produces a regular time measurement','All of the above']
        },
        {
            number:'question3',
            id:3,
            question:'What is actually electricity',
            answer:'A flow of electrons',
            options:['A flow of atoms','A flow of air','A flow of electrons','A flow of water']
        },
        {
            number:'question4',
            id:4,
            question:'What is the most popular sport throughout the world?',
            answer:'Soccer',
            options:['Soccer','Cricket','Volley Ball','Foot Ball']
        },
        {
            number:'question5',
            id:5,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question6',
            id:6,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question7',
            id:7,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number : 'question8',
            id:8,
            question : 'Who is Hero of  Dragon ball Z',
            answer: 'Goku',
            options:['Gohan','Goku','Freiza','Vegeta']
        },
        {
            number:'question10',
            id:10,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question11',
            id:11,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number : 'question12',
            id:12,
            question : 'Who is Marvel Greatest enemy',
            answer: 'Thanos',
            options:['Thanos','Thor','Wonder Women','Dr.Strange']
        },
        {
            number:'question13',
            id:13,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question14',
            id:14,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question15',
            id:15,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question16',
            id:16,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question17',
            id:17,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question18',
            id:18,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question19',
            id:19,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        },
        {
            number:'question20',
            id:20,
            question:'Who is BATMAN',
            answer:'Bruce Whyne',
            options:['clark kent','Bruce Whyne','Wonder Women','Clark']
        }
    ]
}

let count=0;
let answers=[];
for(let i=0;i<5;i++){
    let random=Math.trunc(Math.random()*20);
    let quest=data.allquestions[random];
    let [a,b,c,d]=quest.options;
    answers.unshift(quest.answer);
    
    let html=
    `<div class="questions">${quest.question}</div>
    <div class="option">
    <input type="radio" name="radio${count}" class="options">
    <span class="answer">${a}</span>
    <input type="radio" name="radio${count}" class="options">
    <span class="answer">${b}</span>
    <input type="radio" name="radio${count}" class="options">
    <span class="answer">${c}</span>
    <input type="radio" name="radio${count}" class="options">
    <span class="answer">${d}</span>
    </div>`
    count++;
    document.querySelector('.body').insertAdjacentHTML('afterbegin',html);
}

let ans=0;
let result=0;
function submit(){
    for(let i=0;i<document.querySelectorAll('.options').length;i++)
    {
        let check=document.querySelectorAll('.options')[i].checked
        if(check==true)
        {
            console.log(document.querySelectorAll('.ans')[i].innerHTML,answers[ans])
            if(document.querySelectorAll('.ans')[i].innerHTML==answers[ans])
            {
                console.log('correct')
                result++;
            }else{
                console.log('wrong');
               
            }
            ans++; 
        }
    }
    document.querySelector('.body').style.opacity = 0;
    document.querySelector('.score').innerHTML = `${result} / 5`
    document.querySelector('.result').style.display = 'block';
    
}

document.querySelector('.button').addEventListener('click',submit)


