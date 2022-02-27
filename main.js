window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const li_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the to do task")
            return;
        }

        const task_el = document.createElement('Div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('Div');
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.setAttribute("readonly","readonly");
        task_input_el.value = task;

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("Div");
        task_actions_el.classList.add("actions");

        const actions_edit_el = document.createElement("Button");
        actions_edit_el.classList.add("edit");
        actions_edit_el.innerText = "Edit";

        const actions_delete_el = document.createElement("Button");
        actions_delete_el.classList.add("delete");
        actions_delete_el.innerText = "Delete";

        task_el.appendChild(task_actions_el);

        task_actions_el.appendChild(actions_edit_el);
        task_actions_el.appendChild(actions_delete_el);


        li_el.appendChild(task_el);

        input.value ="";

        actions_delete_el.addEventListener('click', ()=>{
            li_el.removeChild(task_el);
        })


        actions_edit_el.addEventListener('click', ()=>{
            if(actions_edit_el.innerText.toLowerCase()=="edit" ){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                actions_edit_el.innerText ="Save";
            }else{
                task_input_el.setAttribute("readonly","readonly");
                actions_edit_el.innerText ="Edit";
            }
        })


    })
})