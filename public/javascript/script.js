// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


document.addEventListener("DOMContentLoaded",()=>{
const f=document.getElementById("filters"),r=document.getElementById("slide-right"),l=document.getElementById("slide-left");
if(!f||!r||!l)return;
const a=[...f.querySelectorAll(".filter")];let w=[],s=0;
const av=()=>f.clientWidth-parseInt(getComputedStyle(f).paddingLeft)-parseInt(getComputedStyle(f).paddingRight);
const m=()=>{a.forEach(x=>x.style.display="flex");w=a.map(x=>x.offsetWidth+parseInt(getComputedStyle(x).marginRight))};
const c=x=>{let z=0,n=0;while(x+n<w.length&&z+w[x+n]<=av())z+=w[x+n++];return n||1};
const v=()=>{let n=c(s);a.forEach((x,i)=>x.style.display=i>=s&&i<s+n?"flex":"none");l.style.visibility=s?"visible":"hidden";r.style.visibility=s+n<a.length?"visible":"hidden"};
r.onclick=()=>{let n=c(s);if(s+n<a.length){s++;n=c(s);if(s+n>a.length)s=Math.max(a.length-n,0);v()}};
l.onclick=()=>{s=Math.max(s-1,0);v()};
onresize=()=>{s=0;m();v()};m();v();
});


// Search
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("searchSuggestions");

    if (!input || !suggestions) return;

    input.addEventListener("input", async () => {

        const value = input.value.trim();

        if (!value) {
            suggestions.innerHTML = "";
            return;
        }

        const res = await fetch(
            `/listings/search-suggestions?q=${encodeURIComponent(value)}`
        );

        const data = await res.json();

        suggestions.innerHTML = data.map(item => `
            <div class="search-suggestion">
                <i class="fa-solid fa-location-dot"></i>
                <span>${item}</span>
            </div>
        `).join("");

        document.querySelectorAll(".search-suggestion").forEach(item => {

            item.addEventListener("click", () => {
                input.value = item.innerText;
                suggestions.innerHTML = "";
            });

        });

    });

});