function f1() {
    const box = document.getElementById("box"); // обращаемся по id
    box.style.backgroundImage = "url('https://yt3.ggpht.com/ytc/AKedOLTF25TRsTsY1iTVHxeuZMLoS1qTXzfFizOeicK_=s900-c-k-c0x00ffffff-no-rj')";
    box.style.backgroundSize = "cover";
}
function f2() {
    const box = document.getElementById("box"); // обращаемся по id
    box.style.backgroundImage = "url('https://ir.ozone.ru/s3/multimedia-8/6609823136.jpg')";
    box.style.backgroundSize = "cover";
}
function f3() {
    const box2 = document.getElementById("box2"); // обращаемся по id;
    box2.style.width = "30%";
    box2.style.height = "400px";
    box2.style.border = "2px solid #000";
    box2.style.float = "left";

    // Два фона одновременно
    box2.style.backgroundImage = `
        url('https://ir.ozone.ru/s3/multimedia-8/6609823136.jpg'),
        url('https://yt3.ggpht.com/ytc/AKedOLTF25TRsTsY1iTVHxeuZMLoS1qTXzfFizOeicK_=s900-c-k-c0x00ffffff-no-rj')
    `;
    box2.style.backgroundSize = "cover, cover";
    box2.style.backgroundPosition = "center, center";
}