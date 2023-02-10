// console.log để in ra nội dung bất kỳ trên inspect console của trang web 
// console.log("hello world");

// // confirm để bắn ra 1 popup trên web, có nút ok và cancel
// confirm("Bạn có chắc chắn muốn truy cập trang web này không?")

// // alert để bắn ra 1 popup trên web chỉ có 1 nút ok và nội dung alert
// alert("đây là cảnh báo bạn bị tấn công")


// document.getElementById để lấy 1 thẻ theo ID của thẻ đó
// function để định danh 1 cái chức năng xử lý 1 việc gì đó như nút tắt bật trên điều khiển
// sau khi  document.getElementById và gán vào 1 biến (var, let) thì có thể lấy giá trị của thẻ đó = cách .value
function clickVaoButtonLuuThongTin(){  
	var ten = document.getElementById("input-ten");

	console.log(ten.value);

	var tuoi = document.getElementById("input-tuoi");

	console.log(tuoi.value);

	var ho = document.getElementById("input-ho");

	console.log(ho.value);


	// setInterval để lặp đi lặp lại 1 hành động sau 1 khoảng thời gian liên tục đến khi chủ động cho dừng
	var soDem = 1;
	const demSo = setInterval(

		// tham số thứ nhất là 1 hàm xử lý 1 việc gì đó có cú pháp () => { 'nội dung muốn thực hiện' }
		() => {
			soDem = soDem + 1;
			console.log(soDem);
			//if là việc kiểm tra điều kiện, nếu điều kiện thỏa mãn thì thực hiện nội dung trong if nếu không thì thực hiện else
			if(soDem == 10) {
				// clearInterval là dừng lặp 1 cái setInterval nào đó
				clearInterval(demSo);
			} else {
				console.log("tiep tuc + so dem")
			}
		}, 2000
		//tham số thứ 2 là khoảng thời gian chờ để thực thi của tham số thứ nhất (đơn vị milisecond, 1 giây = 1000 millisecond )
	)



}  


function doiMauBackgroundBoxToNhat(){  

		var toNhatBox = document.getElementById("to-nhat");
		toNhatBox.classList.toggle("p408")


}  




