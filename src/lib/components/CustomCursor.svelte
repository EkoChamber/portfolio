<script lang='ts'>
    import { onMount, onDestroy } from 'svelte';

    let x = 0;
    let y = 0;
    let isHovering = false;
    let isMobile = false;
    let cursorVisible = true;

    function checkMobile(): boolean {
        return (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
            (window.matchMedia("(max-width: 768px)").matches)
        );
    }

    function handleMouseMove(e: MouseEvent): void {
        x = e.clientX;
        y = e.clientY;
        cursorVisible = true;
    }

    function handleTouchMove(e: TouchEvent): void {
        if (e.touches.length > 0) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
            cursorVisible = true;
        }
    }

    function handleTouchStart(e: TouchEvent): void {
        if (e.touches.length > 0) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
            cursorVisible = true;
        }
    }

    function handleTouchEnd(): void {
        if (isMobile) {
            cursorVisible = false;
        }
    }

    function handleMouseOver(e: MouseEvent): void {
        if (e.target instanceof HTMLElement) {
            isHovering = 
                e.target.tagName === 'A' || 
                !!e.target.closest('button') || 
                e.target.hasAttribute('onclick');
        } else {
            isHovering = false;
        }
    }

    function handleMouseOut(): void {
        isHovering = false;
    }

    onMount(() => {
        isMobile = checkMobile();

        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
        } else {
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchstart', handleTouchStart);
            window.addEventListener('touchend', handleTouchEnd);
            
            cursorVisible = false;
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    });
</script>
  
{#if cursorVisible}
<div 
    class="cursor"
    class:hovering={isHovering}
    style="
        left: {x}px;
        top: {y}px;
        width: 10px;
        height: 10px;
        background-color: white;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);"
></div>
{/if}
  
<style>
    .cursor {
        position: fixed;
        pointer-events: none;
        transition: transform 0.1s ease;
    }
    
    .hovering {
        transform: translate(-50%, -50%) scale(1.5);
    }
</style>