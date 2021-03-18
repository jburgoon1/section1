// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
    let catId = [];
    for (let id of categories){
        catId.push(id.id)
    }
    return catId;
}     

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
    for (let cat of catId){
        categories.push( 
         {
             id:cat.id,
             title:cat.title,
             clues: 
             [
                {
                    question:cat.question,
                    answer:cat.answer,
                    showing:null
                }
             ]
          }
        )
     }
     console.log(categories.clues)
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    $('body').append('<table id = "jeopardy"></table>')
        let head = $('<thead><tr><td>'+getCategoryIds()+'</td></tr></thead>')
$('#jeopardy').append(head)
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    evt.preventDefault();

}
/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    // const random = Math.round(Math.random() * Math.floor(50))
    let cats = await axios.get('http://jservice.io/api/categories',{params:{count:6}})
   
    for (let cat of cats.data){
        categories.push(
            {
                id:cat.id,
                title: cat.title,
            }
        )
    }
    console.log(cats.data)
    

    let clues =  axios.get('http://jservice.io/api/clues', {params:{category:categories.id}})
    
    getCategoryIds();
    getCategory(clues);
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO