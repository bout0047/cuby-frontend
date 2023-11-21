<script>
	import "@fortawesome/fontawesome-free/js/all.js";
  	import { Link, Route, Router } from "svelte-routing";
    import NavBar from "./NavBar.svelte";
</script>


<NavBar />
<main>
<!-- component -->
<div class="flex items-center justify-center py-8 px-4">
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    
                <div class="max-w-sm w-full shadow-lg">
                    <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                        <div class="px-4 flex items-center justify-between">
                            <span  tabindex="0" class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">November 2023</span>
                            <div class="flex items-center">
                                <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
    
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-12 overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p></th>
                                        <th><p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p></th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <!-- Columns 1-7 -->
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"></div></td>
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"></div></td>
                                        <!-- <td><div class="px-2 py-2 cursor-pointer flex justify-center"></div></td> -->
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">1</p></div></td>
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">2</p></div></td>
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">3</p></div></td>
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">4</p></div></td>
                                        <td class="pt-6"><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">5</p></div></td>
                                    </tr>
                                    <tr>
                                        <!-- Columns 8-14 -->
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">6</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">7</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">8</p></div></td>
                                        <td>
                                            <div class="w-full h-full">
                                                <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                    <a role="link" tabindex="0" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">9</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">10</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">11</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">12</p></div></td>
                                    </tr>
                                    <tr>
                                        <!-- Columns 15-21 -->
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">13</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">14</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">15</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">16</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">17</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">18</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">19</p></div></td>
                                    </tr>
                                    <tr>
                                        <!-- Columns 22-28 -->
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">20</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">21</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">22</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">23</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">24</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">25</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base text-gray-500 dark:text-gray-100">26</p></div></td>
                                    </tr>
                                    <tr>
                                        <!-- Columns 29-35 -->
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">27</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">28</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">29</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">30</p></div></td>
                                        <td><div class="px-2 py-2 cursor-pointer flex justify-center"><p class="text-base font-medium text-gray-500 dark:text-gray-100">31</p></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                        <div class="px-4">
                            <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                                <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Standup with the team</a>
                                <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on what each member did and what each member is going to do today.</p>
                            </div>
                            <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                                <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Standup with the team</a>
                                <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on what each member did and what each member is going to do today.</p>
                            </div>
                            <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                                <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Standup with the team</a>
                                <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on what each member did and what each member is going to do today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
</main>



<style>
    
</style>