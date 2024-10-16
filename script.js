function hello() {
    let name = document.getElementById("name");
    for(i = 0; i < 5; i++) {
        setTimeout(() => {
        name.innerHTML += `
        <div style="display: flex; flex-direction: column; align-items: center; 
                        border: 2px solid black; border-radius: 12px; padding: 20px; 
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); width: 300px;">
                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS0wYIgq0cyU89UHr3Ko69lwNbdadrDieHB7VQTU49LG9lWEkguuG8AVRbUs9eT28CuIxTGrrspBNWf8KJe7zYx0Gk8Vwe0RyZhJTN0cOy" 
                        width="250" style="border-radius: 8px;"/>
                        <h3>Joggers</h3>
                <button style="margin-top: 10px; padding: 10px 20px; background-color: #28a745; 
                               color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Buy Now
                </button>
            </div>`
        }, i * 2000);
    }
}
