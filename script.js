fetch('https://raw.githubusercontent.com/xianyubk/KuaibaoData/master/kuaibao.json')
    .then(response => response.json())
    .then((data) => {
        kuaibaoData = data;
});
let kuaibaoVue;
window.onload = () => {
    kuaibaoVue = new Vue({
        el: '.kuaibao',
        data: {
            kuaibaos: kuaibaoData
        }
    });
}