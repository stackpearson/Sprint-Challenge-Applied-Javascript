// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicEntryPoint = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach(apiTopics => {
        const newTopic = newTopics(apiTopics)
        topicEntryPoint.appendChild(newTopic)
    })
})


function newTopics(apiTopics) {
    const topicTab = document.createElement('div')
    topicTab.classList.add('tab')
    topicTab.textContent = apiTopics

    return topicTab
}