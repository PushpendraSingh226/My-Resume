/*window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const resume = this.document.getElementById("resume");
    console.log(resume);
    console.log(window);
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", size: "a4", orientation: "portrait" },
    };

    html2pdf().from(resume).set(opt).save();
  });
};*/
