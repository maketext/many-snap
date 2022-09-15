/**
 * @license
 * VERSION 0.0.3
 * Use: Just put this js file in like CDN.
 * Released under MIT license
 * using Pure Javascript.
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Copyright Changho Lee and Many Stallings.
 */
 (function() {

  
  if(!document)
    throw new Error("document variable not supported.")
  if(!window)
    throw new Error("window variable not supported.")

  let snap = {}

  /**
   * The version number.
   *
   * @static
   * @memberOf ManySnap
   * @type {string}
   */
  snap.VERSION = '0.0.3';

  /**
   * The toString literal.
   *
   * @static
   * @memberOf ManySnap
   * @type {string}
   */
  snap.TOSTRING = '[object ManySnap]'

  snap.elList = ['#b', '#c', '#d', '#e']
  snap.onscroll = undefined

  /**    
  * @static
  * @returns {None} Snap Object's start trigger.
  */
   snap.init = function (elList) {
    if(Array.isArray(elList))
      snap.elList = elList
    for(let i = 0; i < snap.elList.length; i++)
    {
      try {
        if(typeof snap.elList[i] === 'string')
          snap.elList[i] = document.querySelector(snap.elList[i])

      } catch(e) {
        throw new Error('elList\'s querySelector not matched.')
      }
    }
  }

  function near(b, t)
  {
    if(b == undefined) return false
    if(t == undefined) return false
    if(b < t && t < b + 75) return true 
    if(b - 75 < t && t <= b) return true 
    return false
  }
  window.addEventListener('scroll', () => {
      window.focus()
      for(const el of snap.elList)        
        if(near(el.offsetTop, window.scrollY))
        {
          window.scrollTo(0, el.offsetTop)
          break
        }
      if(typeof snap === 'function')
       snap.onscroll()
  })

  snap.toString = function() {
    return snap.TOSTRING
  }
  window.manysnap = snap
}.call(this))
