import React, { useState } from 'react'
const Header = () => {
    const [dropdownStatus, setDropdownStatus] = useState(false)
    const [showSearchbarTop, setShowSearchbarTop] = useState(false)
    window.addEventListener('scroll', (e) => {
        if (window.scrollY >= 60) {
            setShowSearchbarTop(true)
        } else {
            setShowSearchbarTop(false)
        }
    })
    return (
        <>
            <header className='px-4 md:px-16 fixed top-0 left-0 w-full font-OpenSans z-10  bg-slate-800'>
                <div className="flex relative items-center justify-between py-4">

                    <div className="header__left flex items-center gap-6">
                        <div className="flex items-center">
                            <div className="logo flex items-end">
                                <a href="">
                                    <svg width="100" className='mt-2.5' viewBox="0 0 87 22"><g fill="none" fill-rule="evenodd"><path class="svg_color_brand" fill="#e72c30" d="M57.998 12.982c.122-.678.23-1.313.347-1.95.383-2.159.767-4.317 1.138-6.476.11-.625-.28-1.074-.925-1.104-.414-.018-.834-.012-1.248-.012-.864.006-1.436.51-1.583 1.35-.462 2.65-.937 5.301-1.411 7.946-.019.09-.129.234-.196.234-1.186-.018-2.368-.03-3.549-.108-.767-.048-1.382-.432-1.814-1.068-.024-.03-.055-.053-.097-.102-.165.175-.317.342-.48.498-.543.534-1.17.852-1.955.792-.554-.042-1.12 0-1.662-.096-.968-.174-1.759-.648-2.234-1.59-.073.324-.152.642-.225.966-.165.774-.158.768-.962.732-.572-.024-1.144-.102-1.638-.396-.377-.228-.7-.552-1.077-.852-.11.114-.262.282-.42.438-.542.528-1.169.828-1.954.798-.749-.03-1.497.018-2.222-.246-1.29-.474-1.99-1.583-1.766-2.927.293-1.77.548-3.55.95-5.295.408-1.752 1.474-2.975 3.355-3.353a4.12 4.12 0 01.815-.084c1.553-.006 3.105-.006 4.657-.006.079 0 .152.012.256.024-.152.852-.304 1.685-.45 2.52-.348 1.924-.7 3.843-1.035 5.769-.03.18.042.401.133.563.232.414.95.702 1.425.624.176-2.045.585-4.048 1.016-6.04.384-1.763 1.474-2.998 3.367-3.376a4.12 4.12 0 01.815-.084c1.553-.006 3.105-.006 4.658-.006.066 0 .14.012.243.018-.091.522-.177 1.031-.268 1.535-.414 2.285-.834 4.57-1.248 6.855-.06.324.055.594.323.792.103.078.22.156.34.186.25.066.53.18.768.132.328-.066.206-.426.249-.654.475-2.579.932-5.158 1.388-7.743.067-.36.134-.725.207-1.103.098-.006.183-.018.274-.018 1.51 0 3.025-.006 4.535 0 .59.006 1.169.126 1.704.384.908.444 1.437 1.17 1.395 2.171-.031.84-.183 1.68-.323 2.513-.366 2.111-.749 4.222-1.126 6.327-.019.12-.03.24-.068.354-.023.06-.103.138-.157.138-.755.036-1.492.03-2.265.03zM39.291 3.464a.917.917 0 00-.147-.024c-.766 0-1.54-.006-2.306 0-.768.006-1.346.468-1.485 1.206-.3 1.574-.584 3.152-.853 4.731-.134.798.268 1.248 1.108 1.284.335.011.67.006 1.005 0 .919-.006 1.467-.474 1.63-1.367.25-1.392.512-2.784.767-4.169.086-.545.177-1.098.28-1.661zm10.172.006c-.085-.018-.116-.03-.14-.03-.773 0-1.54-.012-2.313 0-.78.011-1.358.474-1.498 1.224a422.148 422.148 0 00-.852 4.731c-.122.714.195 1.14.925 1.23.402.048.81.03 1.212.03.883-.006 1.442-.474 1.594-1.332l.713-3.85c.122-.654.237-1.32.359-2.003zm-21.038 9.518c-.213 0-.384.006-.554 0-.84-.018-1.687.018-2.52-.072-1.26-.144-2.137-.924-2.387-1.997-.14-.588-.06-1.17.043-1.751.28-1.548.548-3.1.846-4.648.36-1.872 1.826-3.215 3.769-3.365 1.138-.09 2.288-.054 3.433-.066.608-.006 1.211 0 1.868 0-.079.474-.152.924-.23 1.367-.44 2.453-.884 4.906-1.328 7.36-.28 1.54-.536 3.082-.852 4.617-.427 2.093-2.045 3.058-3.707 3.293-.402.053-.81.06-1.212.06-1.4.005-2.8 0-4.2 0-.018 0-.037-.006-.08-.018.006-.036 0-.072.019-.102.39-.69.773-1.38 1.181-2.057.06-.096.243-.162.371-.162 1.23-.013 2.453-.006 3.683-.006.938 0 1.419-.378 1.62-1.284.097-.377.151-.737.237-1.17zm-.926-2.363v.036c.317 0 .633-.024.944.006.31.03.42-.096.469-.384.322-1.883.657-3.766.992-5.65.128-.707-.237-1.17-.974-1.193-.408-.012-.81-.006-1.217-.006-.816.012-1.37.474-1.516 1.271-.158.864-.323 1.722-.475 2.586-.134.773-.286 1.546-.377 2.326-.068.558.243.924.82.99.44.054.89.018 1.334.018zm44.044-9.53c-.214 1.194-.427 2.345-.634 3.502a669.492 669.492 0 00-.864 4.793c-.116.641.158 1.043.786 1.247.078.024.17.174.158.252-.11.69-.238 1.373-.366 2.099-1.077-.066-2.014-.39-2.684-1.301-.177.185-.329.36-.493.52-.536.517-1.15.829-1.93.787-.675-.036-1.352.03-2.015-.175-1.492-.455-2.24-1.612-1.978-3.124.298-1.739.553-3.484.95-5.206.376-1.619 1.35-2.8 3.055-3.25a4.67 4.67 0 011.078-.15c1.583-.018 3.165-.006 4.742-.006.048 0 .104.006.195.012zm-2.8 2.369c-.123-.012-.196-.024-.274-.024-.731 0-1.462-.006-2.192 0-.755.011-1.333.456-1.467 1.182a319.26 319.26 0 00-.87 4.881c-.104.612.213 1.032.845 1.11.408.054.828.042 1.242.042.95 0 1.498-.48 1.662-1.404.268-1.511.554-3.016.828-4.522.079-.413.146-.827.225-1.265zM0 0h18v18H0z"></path><path class="svg_g" fill="#FFF" d="M11.585 3.752c.371-.004.74 0 1.143 0-.049.297-.093.58-.142.86-.268 1.541-.54 3.084-.811 4.626-.171.968-.328 1.937-.522 2.903-.261 1.316-1.251 1.922-2.268 2.07a5.588 5.588 0 01-.742.037c-.856.004-1.713 0-2.57 0a.151.151 0 01-.048-.012c.004-.021 0-.045.01-.063.24-.434.474-.867.724-1.293.037-.06.149-.102.227-.102.753-.008 1.501-.004 2.254-.004.573 0 .867-.237.99-.807.06-.237.093-.463.146-.735-.13 0-.235.004-.34 0-.514-.013-1.032.01-1.542-.046-.772-.09-1.308-.58-1.461-1.255-.085-.37-.036-.736.027-1.102.171-.972.336-1.949.518-2.92.22-1.177 1.118-2.022 2.306-2.115.697-.057 1.4-.035 2.1-.042zM9.91 5.225l-.373.001c-.498.008-.837.297-.927.8-.097.542-.197 1.081-.29 1.624-.082.487-.175.973-.23 1.463-.042.35.147.66.501.66h1.393c.177 0 .258-.061.288-.241.197-1.184.402-2.368.606-3.552.08-.444-.145-.736-.596-.75-.249-.008-.495-.004-.745-.004z"></path></g></svg>
                                </a>
                            </div>
                            <button className={`hidden ${showSearchbarTop ? 'opacity-0' : ''} items-center gap-2 text-sm md:right-3 duration-500 hover:bg-opacity-80 bg-red-600 text-white rounded-lg px-4 py-2 `}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg>
                                <span>Search</span>
                            </button>
                            <div className='lg:flex hidden items-center uppercase text-slate-400 gap-6'>
                                <a href="#" className='duration-300 text-sm hover:text-red-600 font-medium'>Radio</a>
                                <a href="#" className='duration-300 text-sm hover:text-red-600 font-medium'>Discover</a>
                                <a href="#" className='duration-300 text-sm hover:text-red-600 font-medium'>Browse</a>
                                <a href="#" className='duration-300 text-sm text-red-600 font-medium'>my music</a>
                            </div>
                        </div>
                    </div>
                    <ul className="header__right flex justify-end items-center gap-6">
                        <li className={`bg-red-600 duration-500 rounded-full opacity-100 scale-100 ${showSearchbarTop ? '' : 'md:opacity-0 md:scale-95'}`}>
                            <button className={`h-8  text-white w-8 flex items-center justify-center font-OpenSans rounded-full  bg-red-600 uppercase font-medium hover:text-white duration-500 border bg-transparent outline-none border-red-600`}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg>
                            </button>

                        </li>
                        <li>
                            <button className='text-sm hidden md:block px-4 py-1.5 font-OpenSans rounded-2xl  hover:bg-red-600 uppercase font-medium hover:text-white duration-500 border bg-transparent text-red-600 outline-none border-red-600'>get ganna+</button>

                        </li>
                        <li>
                            <button className='text-sm h-8 w-8 duration-500 active:scale-90 hover:bg-slate-700 flex items-center justify-center rounded-md text-slate-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M23,24H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm-8.23-5.14s6.35-6.75,6.35-6.75c.87-.87,1.12-2.11,.65-3.24-.47-1.13-1.52-1.84-2.75-1.85h-2.07s-.03-3.05-.03-3.05c0-2.19-1.78-3.97-3.97-3.97h-1.98c-2.19,0-3.97,1.78-3.97,3.98v3.02s-2.05,0-2.05,0c-1.23,0-2.28,.71-2.75,1.85-.47,1.13-.22,2.38,.63,3.22l6.33,6.8c.77,.77,1.79,1.16,2.81,1.16s2.03-.39,2.81-1.16Zm-6.77-9.86c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V3.97c0-1.09,.88-1.97,1.97-1.97h1.98c1.09,0,1.97,.89,1.97,1.98l.03,4.05c0,.55,.45,.99,1,.99h3.05c.61,0,.85,.47,.9,.61,.06,.14,.22,.64-.24,1.09l-6.33,6.73c-.77,.76-2.01,.75-2.75,.01l-6.33-6.8c-.43-.43-.27-.93-.21-1.07,.06-.14,.3-.61,.9-.61h3.06Z" /></svg>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setDropdownStatus(!dropdownStatus)} className={`text-sm h-8 w-8 duration-500 active:scale-90 ${dropdownStatus ? 'bg-slate-700' : 'bg-slate-700 bg-opacity-50'} flex items-center justify-center rounded-md text-slate-400`}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path fill="currentColor" d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
                            </button>

                        </li>

                    </ul>
                    {/* dropdown */}
                    <div className={`dropdown ${dropdownStatus ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'} duration-150 absolute py-4 px-2 rounded-md w-[230px]  bg-slate-900 top-full right-0`}>
                        <ul className='flex flex-col text-slate-400 text-sm font-normal'>
                            <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                <a href="#" className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path fill="currentColor" d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                <a href="#" className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /><path fill="currentColor" d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" /></svg>
                                    <span>Setting</span>
                                </a>
                            </li>
                            <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                <a href="#" className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M15,2.416v2.1a9,9,0,1,1-6,0v-2.1a11,11,0,1,0,6,0Z" /><rect fill="currentColor" x="11" width="2" height="8" /></svg>
                                    <span>Logout</span>
                                </a>
                            </li>
                            <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                <a href="#" className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M23,24H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm-8.23-5.14s6.35-6.75,6.35-6.75c.87-.87,1.12-2.11,.65-3.24-.47-1.13-1.52-1.84-2.75-1.85h-2.07s-.03-3.05-.03-3.05c0-2.19-1.78-3.97-3.97-3.97h-1.98c-2.19,0-3.97,1.78-3.97,3.98v3.02s-2.05,0-2.05,0c-1.23,0-2.28,.71-2.75,1.85-.47,1.13-.22,2.38,.63,3.22l6.33,6.8c.77,.77,1.79,1.16,2.81,1.16s2.03-.39,2.81-1.16Zm-6.77-9.86c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V3.97c0-1.09,.88-1.97,1.97-1.97h1.98c1.09,0,1.97,.89,1.97,1.98l.03,4.05c0,.55,.45,.99,1,.99h3.05c.61,0,.85,.47,.9,.61,.06,.14,.22,.64-.24,1.09l-6.33,6.73c-.77,.76-2.01,.75-2.75,.01l-6.33-6.8c-.43-.43-.27-.93-.21-1.07,.06-.14,.3-.61,.9-.61h3.06Z" /></svg>
                                    <span>Download</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </header>
            <nav className='px-16 mt-[60px] font-OpenSans  hidden lg:block bg-slate-800'>
                <div className="py-4 flex items-center gap-4">

                    <div className="searchbox w-[600px] h-12 rounded-xl bg-slate-700 relative">
                        <input type="text" placeholder='Search the best music here' className='h-full w-full px-4 bg-transparent  text-sm text-slate-400 rounded-xl border-none outline-none focus:outline-1 focus:outline-slate-600' />
                        <button className='absolute flex items-center gap-2 text-sm right-3 duration-500 hover:bg-opacity-80 bg-red-600 text-white rounded-lg px-4 py-2 top-1/2 -translate-y-1/2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg>
                            <span>Search</span>
                        </button>
                    </div>
                    <ul className='flex items-center gap-2 '>
                        <li>
                            <button className='duration-500 bg-red-600 capitalize text-white border border-red-600  px-4 py-1 rounded-2xl'>
                                trending
                            </button>
                        </li>
                        <li>
                            <button className='bg-transparent duration-500 capitalize hover:bg-red-600 hover:text-white border border-red-600 text-red-600 px-4 py-1 rounded-2xl'>
                                upcoming
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header