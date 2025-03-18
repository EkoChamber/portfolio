<script lang='ts'>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let x = 0;
    let y = 0;
    let isHovering = false;
    let isMobile = false;
    let cursorVisible = true;
    let cursorSize = 10;

    function detectMobile() {
        if (!browser) return false;
        
        return (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
            window.matchMedia("(max-width: 768px)").matches ||
            'ontouchstart' in window
        );
    }

    function handleMouseMove(e: MouseEvent): void {
        if (isMobile) return;
        
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
            
            if (isMobile) {
                setTimeout(() => {
                    cursorVisible = false;
                }, 500);
            }
        }
    }

    function handleMouseOver(e: MouseEvent): void {
        if (e.target instanceof HTMLElement) {
            isHovering = 
                e.target.tagName === 'A' || 
                !!e.target.closest('button') || 
                e.target.hasAttribute('onclick') ||
                e.target.classList.contains('project-card');
                
            cursorSize = isHovering ? 15 : 10;
        } else {
            isHovering = false;
            cursorSize = 10;
        }
    }

    function handleMouseOut(): void {
        isHovering = false;
        cursorSize = 10;
    }

    onMount(() => {
        isMobile = detectMobile();
        
        document.body.classList.add('custom-cursor-active');
        
        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
        } else {
            cursorVisible = false;
            
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchstart', handleTouchStart);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            
            document.body.classList.remove('custom-cursor-active');
        };
    });
</script>

{#if cursorVisible}
<div 
    class="custom-cursor"
    class:hovering={isHovering}
    style="
        left: {x}px;
        top: {y}px;
        width: {cursorSize}px;
        height: {cursorSize}px;"
></div>
{/if}

<style>
    .custom-cursor {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease, transform 0.1s ease;
    }
    
    .hovering {
        transform: translate(-50%, -50%) scale(1.2);
        mix-blend-mode: difference;
    }
</style>