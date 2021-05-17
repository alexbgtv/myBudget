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
    	plus = ''
    	 


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

    	let id = document.querySelector('.button')
    	id.setAttribute('id', 'plusIncome')

    	//plusArticle('income')
    	plusIncome.addEventListener('click', function(){
	    	let a = prompt('СТАТЬЯ-income', 'золото'),
	    		b = +prompt('СУММА', 10000)
	   		appData.income[a] =  b
	   		change('income')
    	})
    })

    let savingShow = document.querySelector('#saving')
    savingShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Сбережения'
    	change('savings')

    	let id = document.querySelector('.button')
    	id.setAttribute('id', 'plusSevings')

    	//plusArticle('savings')
    	plusSevings.addEventListener('click', function(){
	    	let a = prompt('СТАТЬЯ-savings', 'золото'),
	    		b = +prompt('СУММА', 10000)
	   		appData.savings[a] =  b
	   		change('savings')
    	})
    })

    let expensiveShow = document.querySelector('#expensive')
    expensiveShow.addEventListener('click', function(){
    	titleDetailse.innerHTML = 'Расходы'
    	change('expenses')

    	let id = document.querySelector('.button')
    	id.setAttribute('id', 'plusExpenses')

    	//plusArticle('expenses')
    	plusExpenses.addEventListener('click', function(){
	    	let a = prompt('СТАТЬЯ-expenses', 'золото'),
	    		b = +prompt('СУММА', 10000)
	   		appData.expenses[a] =  b
	   		change('expenses')
    	})
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

    // function plusArticle(category) {
    // 	plus.addEventListener('click', function(){
	   //  	let a = prompt(category, 'золото'),
	   //  		b = +prompt(category, 10000)
	   // 		appData[category][a] =  b
	   // 		change(category)
    // 	})
    // }

    // detailes
    
    console.log(appData)


   
    