import Pen from 'src/assets/svgComponents/Pen'

export const TagsArr = ['javascript', 'jquery', 'pageshow']

export const markdown = `
  # Heading1
  ## Heading2
  please I need help posting a form I built in HTML to an API endpoint that is protected by OAuth1.0, I think I need an authorization header and also need to get an access token though 
  not sure of what to do, I am new to codes, here is my script const myform = document.getElementById('myform');
  \`\`\`js
  myform.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const options = {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'},
        body: JSON.stringify(Object.fromEntries(formData))

    }


    fetch('https://api.tripleseat.com/v1/leads/create.js?lead_form_id=xxxxx&public_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', options)
        
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
    })
});
  \`\`\`

  테스트 테스트 테스트 

  <p>I love <b>Remirror</b></p>

  1.  As is
    
  2.  An ordered
    
  3.  List
    
  4.  323123
  `

export const contents1 = [
  {icon: Pen, content: 'Open source and accidental innovation'},
  {icon: Pen, content: 'The luckiest guy in AI (Ep. 477)'},
]
export const contents2 = [
  {icon: Pen, content: 'Recent site instability, major outages – July/August 2022'},
  {icon: Pen, content: 'Please welcome Valued Associate #1301 - Emerson'},
  {icon: Pen, content: 'Staging Ground Workflow: Question Lifecycle'},
  {icon: Pen, content: 'Collectives Update: WSO2 launches, and Google Go sunsets'},
  {icon: Pen, content: 'Should we burninate the [option] tag?'},
]
