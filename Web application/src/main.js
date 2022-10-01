/* eslint-disable one-var */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var sites = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

function autocomplete (inp, arr) {
  var currentFocus

  inp.addEventListener('input', function (e) {
    var a, b, i, val = this.value

    closeAllLists()
    if (!val) { return false }
    currentFocus = -1

    a = document.createElement('DIV')
    a.setAttribute('id', this.id + 'autocomplete-list')
    a.setAttribute('class', 'autocomplete-items')
    this.parentNode.appendChild(a)

    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = document.createElement('DIV')

        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
        b.innerHTML += arr[i].substr(val.length)

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"

        b.addEventListener('click', function (e) {
          inp.value = this.getElementsByTagName('input')[0].value

          closeAllLists()
        })
        a.appendChild(b)
      }
    }
  })

  inp.addEventListener('keydown', function (e) {
    var x = document.getElementById(this.id + 'autocomplete-list')
    if (x) x = x.getElementsByTagName('div')
    if (e.keyCode === 40) {
      currentFocus++

      addActive(x)
    } else if (e.keyCode === 38) {
      currentFocus--

      addActive(x)
    } else if (e.keyCode === 13) {
      e.preventDefault()
      if (currentFocus > -1) {
        if (x) x[currentFocus].click()
      }
    }
  })
  function addActive (x) {
    if (!x) return false

    removeActive(x)
    if (currentFocus >= x.length) currentFocus = 0
    if (currentFocus < 0) currentFocus = (x.length - 1)

    x[currentFocus].classList.add('autocomplete-active')
  }
  function removeActive (x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active')
    }
  }
  function closeAllLists (elmnt) {
    var x = document.getElementsByClassName('autocomplete-items')
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }

  document.addEventListener('click', function (e) {
    closeAllLists(e.target)
  })
}

autocomplete(document.getElementById('myInput'), sites)
