	let money = 0,
		time = ''

    appData = {
        budget: money,
        income: {
        	'site': 40000,
        	'youtube': 20000,
        },
        timeData: time,
        expenses: {
        	'квартира': 30000,
        	'обучение': 15000
        },
        optionalExpenses: {},
        savings: {
        	'буфер': 350000,
        	'машина': 300000
        },
    }



    let titleDetailse = document.querySelector('#titleDetailse'),
    	block =  document.querySelector('#block'),
    	 plus = document.querySelector('#plus')


    // main
    
    let budgetShow = document.querySelector('#budget')
    budgetShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Бюджет'
    	change(budget)
    	plusArticle(budget)
    })

    let incomeShow = document.querySelector('#income')
    incomeShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Доход'
    	change('income')
    	plusArticle('income')
    })

    let savingShow = document.querySelector('#saving')
    savingShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Сбережения'
    	change('savings')
    	plusArticle('savings')
    })

    let expensiveShow = document.querySelector('#expensive')
    expensiveShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Расходы'
    	change('expenses')
    	plusArticle('expenses')
    })


    function change(category) {
    	block.innerHTML = ''

    	for (var key in appData[category]) {
    		block.insertAdjacentHTML('beforeend', `
    			<div class="row p3 justify-content-evenly">
            		<div class="col-7 m3 navy">${key}</div>
           			<div class="col-4 m3 navy c-yellow">${appData[category][key]}</div>
          		</div>
    		`)
    	}
    }

    function plusArticle(category) {
    	plus.addEventListener('click', function(){
	    	let a = prompt(category, 'золото'),
	    		b = +prompt(category, 10000)
	   		appData[category][a] =  b
	   		change(category)
    	})
    }

    // detailes
    
    console.log(appData)


   
    