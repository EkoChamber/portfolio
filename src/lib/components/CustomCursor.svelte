<script>
    import { onMount, onDestroy } from 'svelte';
  
    let x = 0;
    let y = 0;
    let isHovering = false;
  
    function handleMouseMove(e) {
      x = e.clientX;
      y = e.clientY;
    }
  
    function handleMouseOver(e) {
      isHovering = e.target.tagName === 'A' || 
                   e.target.closest('button') || 
                   e.target.onclick;
    }
  
    function handleMouseOut() {
      isHovering = false;
    }
  
    onMount(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mouseout', handleMouseOut);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('mouseout', handleMouseOut);
      };
    });
  </script>
  
  <div 
    style="
      position: fixed;
      left: {x}px;
      top: {y}px;
      width: 10px;
      height: 10px;
      background-color: white;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
    "
  />
  
  <style>
    div {
      position: fixed;
      pointer-events: none;
    }
  </style>