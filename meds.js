const meds = document.getElementsByClassName("med");
const total = document.getElementById("total");
for (const med of meds) {
	med.addEventListener("click", function () {
		this.classList.toggle("active");
		const price = this.querySelector("div.med-info-details>p").innerText;
		if (this.classList.contains("active")) {
			total.innerText =
				"₹" +
				(parseFloat(price.slice(1)) +
					parseFloat(total.innerText.slice(1)));
		} else {
			total.innerText =
				"₹" +
				(parseFloat(total.innerText.slice(1)) -
					parseFloat(price.slice(1)));
		}
	});
}

meds[0].addEventListener("click", () => {
	if (meds[0].classList.contains("active")) {
		meds[2].classList.add("harmful");
	} else {
		meds[2].classList.remove("harmful");
	}
});

meds[2].addEventListener("click", () => {
	if (meds[2].classList.contains("active")) {
		meds[0].classList.add("harmful");
	} else {
		meds[0].classList.remove("harmful");
	}
});
