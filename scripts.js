// メニュー開閉
document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("hidden");
});

// スクロール時のアニメーション
document.addEventListener("scroll", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            box.classList.add("show");
        }
    });
});
