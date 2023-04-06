const freePlanBlock = document.querySelector('.free_plan')
const standartPlanBlock = document.querySelector('.standart_plan')
const premiumPlanBlock = document.querySelector('.premium_plan')
const freebtn = document.querySelector('.free_button')
const standartbtn = document.querySelector('.standart_button')
const premiumbtn = document.querySelector('.premium_button')
const freebtnShadow = document.querySelector('.free_button_shadow')
const standartbtnShadow = document.querySelector('.standart_button_shadow')
const premiumbtnShadow = document.querySelector('.premium_button_shadow')




const carousel = document.querySelector('.carousel')
const controlDots = document.querySelector('.control_dots')
let carouselIndex = 1
const arrowNext = document.querySelector('#arrow_next')
const arrowBack = document.querySelector('#arrow_back')
const controlDot_1 = document.querySelector('#dot_1')
const controlDot_2 = document.querySelector('#dot_2')
const controlDot_3 = document.querySelector('#dot_3')



const userSel_1 = `
                <div class="users selected_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/first_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Viezh Robert</h5>
                                <h6>Warsaw, Poland</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                    </p>
                </div>
`
const userSel_2 = `
                <div class="users selected_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/second_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Yessica Christy</h5>
                                <h6>Shanxi, China</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “I like it because I like to travel far and still can connect with high speed.”.
                    </p>
                </div>
`
const userSel_3 = `
                <div class="users selected_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/third_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Kim Young Jou</h5>
                                <h6>Seoul, South Korea</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                    </p>
                </div>
`
const userSel_4 = `
                <div class="users selected_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/third_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Kim Young Jou</h5>
                                <h6>Seoul, South Korea</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                    </p>
                </div>
`
let usersSel_array = [userSel_1, userSel_2, userSel_3, userSel_4]

const user_1 = `
                <div class="users other_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/first_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Viezh Robert</h5>
                                <h6>Warsaw, Poland</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                    </p>
                </div>
`
const user_2 = `
                <div class="users other_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/second_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Yessica Christy</h5>
                                <h6>Shanxi, China</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “I like it because I like to travel far and still can connect with high speed.”.
                    </p>
                </div>
`
const user_3 = `
                <div class="users other_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/third_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Kim Young Jou</h5>
                                <h6>Seoul, South Korea</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                    </p>
                </div>
`
const user_4 = `
                <div class="users other_user">
                    <div class="user_block">
                        <div class="user">
                            <img src="img/third_user.png" alt="first_user" width="50" height="50">
                            <div class="user_info">
                                <h5>Kim Young Jou</h5>
                                <h6>Seoul, South Korea</h6>
                            </div>
                        </div>
                        <div class="user_score">
                            <h5>4,5</h5>
                            <img src="img/score.png" alt="score" width="13" height="12">
                        </div>
                    </div>
                    <p>
                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                    </p>
                </div>
`

let users_array = [user_1, user_2, user_3, user_4]

function loadDots() {
    for (let i = 1; i <= usersSel_array.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'control_dot';
        dot.id = `dot_${i}`;

        dot.addEventListener('click', () => {
            carouselIndex = i
            controlDots.innerHTML = ''
            loadCarousel(carouselIndex)
            // loadDots()
        })

        if (i === carouselIndex) {
            dot.className += ' selected_dot';
            dot.removeEventListener('click', () => {
                currentIndex = i
                controlDots.innerHTML = ''
                loadCarousel(currentIndex)
                // loadDots()
            })
        }
        controlDots.appendChild(dot);
    }
  }
  

loadCarousel(carouselIndex)
arrowNext.addEventListener('click', carouselNext)
arrowBack.addEventListener('click', carouselBack)


function loadCarousel(index) {
    currentIndex = index - 1
    prevIndex = currentIndex - 1
    nextIndex = currentIndex + 1
    if (prevIndex == -1) {
        prevIndex = usersSel_array.length - 1
    }
    if (nextIndex > usersSel_array.length - 1) {
        nextIndex = 0
    }
    const userBlock1 = users_array[prevIndex]
    const userBlock2 = usersSel_array[currentIndex]
    const userBlock3 = users_array[nextIndex]
    let output = ''
    output += userBlock1
    output += userBlock2
    output += userBlock3
    carousel.innerHTML = output
    controlDots.innerHTML = ''
    loadDots()
}
function carouselNext(){
    carouselIndex++
    if (carouselIndex > usersSel_array.length){
        carouselIndex = 1
    }
    loadCarousel(carouselIndex)
}
function carouselBack(){
    carouselIndex--
    if (carouselIndex == 0){
        carouselIndex = usersSel_array.length
    }
    loadCarousel(carouselIndex)
}

freebtn.addEventListener('click', () => {
    freePlanBlock.classList.add('selected_plan_block')
    standartPlanBlock.classList.remove('selected_plan_block')
    premiumPlanBlock.classList.remove('selected_plan_block')

    freebtn.classList.add('selected_plan_btn')
    standartbtn.classList.remove('selected_plan_btn')
    premiumbtn.classList.remove('selected_plan_btn')
})
standartbtn.addEventListener('click', () => {
    freePlanBlock.classList.remove('selected_plan_block')
    standartPlanBlock.classList.add('selected_plan_block')
    premiumPlanBlock.classList.remove('selected_plan_block')

    freebtn.classList.remove('selected_plan_btn')
    standartbtn.classList.add('selected_plan_btn')
    premiumbtn.classList.remove('selected_plan_btn')
})
premiumbtn.addEventListener('click', () => {
    freePlanBlock.classList.remove('selected_plan_block')
    standartPlanBlock.classList.remove('selected_plan_block')
    premiumPlanBlock.classList.add('selected_plan_block')

    freebtn.classList.remove('selected_plan_btn')
    standartbtn.classList.remove('selected_plan_btn')
    premiumbtn.classList.add('selected_plan_btn')
})

//mobile code

const setMobileFreebtn = document.querySelector('#mobile_select_free')
const setMobileStandartbtn = document.querySelector('#mobile_select_standart')
const setMobilePremiumbtn = document.querySelector('#mobile_select_premium')

setMobileFreebtn.addEventListener('click', () => {
    freePlanBlock.style.display = 'flex'
    standartPlanBlock.style.display = 'none'
    premiumPlanBlock.style.display = 'none'
    setMobileFreebtn.classList.add('selected_mobile_btn')
    setMobileStandartbtn.classList.remove('selected_mobile_btn')
    setMobilePremiumbtn.classList.remove('selected_mobile_btn')
})

setMobileStandartbtn.addEventListener('click', () => {
    freePlanBlock.style.display = 'none'
    standartPlanBlock.style.display = 'flex'
    premiumPlanBlock.style.display = 'none'
    setMobileFreebtn.classList.remove('selected_mobile_btn')
    setMobileStandartbtn.classList.add('selected_mobile_btn')
    setMobilePremiumbtn.classList.remove('selected_mobile_btn')
})

setMobilePremiumbtn.addEventListener('click', () => {
    freePlanBlock.style.display = 'none'
    standartPlanBlock.style.display = 'none'
    premiumPlanBlock.style.display = 'flex'
    setMobileFreebtn.classList.remove('selected_mobile_btn')
    setMobileStandartbtn.classList.remove('selected_mobile_btn')
    setMobilePremiumbtn.classList.add('selected_mobile_btn')
})

if (window.matchMedia('(max-width: 320px) or (max-width: 376px) or (max-width: 426px)').matches) {
    freePlanBlock.style.display = 'flex'
    setMobileFreebtn.classList.add('selected_mobile_btn')
    setMobileStandartbtn.classList.remove('selected_mobile_btn')
    setMobilePremiumbtn.classList.remove('selected_mobile_btn')
}

