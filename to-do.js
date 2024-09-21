let count=1;

document.getElementById('task-btn').addEventListener('click', function(){

        const inputValue = document.getElementById('input-value');
        
        const value = inputValue.value;
        
        const container = document.getElementById('content-container');
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        
        td.innerText = value;
    
const button = document.createElement('button');
button.innerHTML = `
<button class="btn btn-circle btn-outline btn-xs items-center ml-5 mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

`
        th.innerText=count++;
        tr.append(th,td,button);
        
        container.appendChild(tr);

    inputValue.value='';


})

