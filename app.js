// ---------Result App-----------//
const stu_form = document.querySelector('.result form');
const tBody = document.querySelector('.result tbody');

stu_form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = this.querySelector('.result input[placeholder="Name"]').value;
    const roll = this.querySelector('.result input[placeholder="Roll"]').value;
    const stuClass = this.querySelector('.result .form-select option:checked').value;
    const photo = this.querySelector('.result input[placeholder="Photo Link"]').value;
    const gender = this.querySelector('.result input[name="gender"]:checked');
    const bangla = this.querySelector('.result input[placeholder="Bangla"]').value;
    const english = this.querySelector('.result input[placeholder="English"]').value;
    const math = this.querySelector('.result input[placeholder="Math"]').value;
    const social = this.querySelector('.result input[placeholder="Social Science"]').value;
    const science = this.querySelector('.result input[placeholder="Science"]').value;
    const religion = this.querySelector('.result input[placeholder="Religion"]').value;

    if (name == '' || roll == '' || stuClass == '' || photo == '' || gender == '' || bangla == '' || english == '' | math == '' || social == '' || science == '' || religion == '') {
        alert()
    } else {
        

        let dataArr = [];
        if (getLocal('Student')) {
            dataArr = getLocal('Student');
        }

        dataArr.push({
            name   : name,
            roll   : roll,
            stuClass: stuClass,
            photo: photo,
            gender: gender.value,
            bangla: bangla,
            english: english,
            math: math,
            social: social,
            science: science,
            religion: religion
        })

        sendLocal('Student', dataArr);

        this.querySelector('.result input[placeholder="Name"]').value = '';
        this.querySelector('.result input[placeholder="Roll"]').value = '';
        this.querySelector('.result .form-select option:checked').removeAttribute('checked');
        this.querySelector('.result input[placeholder="Photo Link"]').value = '';
        this.querySelector('.result input[name="gender"]:checked').removeAttribute('checked');
        this.querySelector('.result input[placeholder="Bangla"]').value = '';
        this.querySelector('.result input[placeholder="English"]').value = '';
        this.querySelector('.result input[placeholder="Math"]').value = '';
        this.querySelector('.result input[placeholder="Social Science"]').value = '';
        this.querySelector('.result input[placeholder="Science"]').value = '';
        this.querySelector('.result input[placeholder="Religion"]').value = '';

        allStudent();


    }
});

allStudent();
function allStudent() {
    let allData = getLocal('Student');
    let htData = '';

    allData.map((data, index) => {
        htData += `<tr>
        <td>${index +1}</td>
        <td>${data.name}</td>
        <td>${data.roll}</td>
        <td>${data.stuClass}</td>
        <td>${data.gender}</td>
        <td>A+</td>
        <td><img style="max-width: 100%; width: 35px; height: 35px; object-fit: cover; border-radius: 10px;" src="${data.photo}" alt=""></td>
        <td>
          <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#student-modal" onclick="studentModal(${index})">View</button>
          <button onclick="deleteData(${index})" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>`
    })

    tBody.innerHTML = htData;
}

function deleteData(index) {
    let arr_data = getLocal('Student');
    arr_data.splice(index, 1);
    sendLocal('Student', arr_data);
    allStudent();
}


const student_sheet = document.querySelector('.modal .student-sheet');

function studentModal(index) {
    let result = new Result();
    let arr_data = getLocal('Student');
    student_sheet.innerHTML = `
    
              <div class="img mx-auto shadow" style="width: 120px; height: 120px; padding: 10px;">
                <img style="width: 100%; height: 100%; object-fit: cover;" src="${arr_data[index].photo}" alt="">
              </div>
              <h4 class="text-center">${arr_data[index].name}</h4>
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>GPA</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bangla</td>
                    <td>${arr_data[index].bangla}</td>
                    <td>${result.sgpa(arr_data[index].bangla)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].bangla))}</td>
                    <td rowspan="6">${result.tgpa(result.sgpa(arr_data[index].bangla), result.sgpa(arr_data[index].english), result.sgpa(arr_data[index].math), result.sgpa(arr_data[index].social), result.sgpa(arr_data[index].science), result.sgpa(arr_data[index].religion)).totalgpa}</td>
                    <td rowspan="6">${result.tgpa(result.sgpa(arr_data[index].bangla), result.sgpa(arr_data[index].english), result.sgpa(arr_data[index].math), result.sgpa(arr_data[index].social), result.sgpa(arr_data[index].science), result.sgpa(arr_data[index].religion)).totalgrade}</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>${arr_data[index].english}</td>
                    <td>${result.sgpa(arr_data[index].english)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].english))}</td>
                  </tr>
                  <tr>
                    <td>Math</td>
                    <td>${arr_data[index].math}</td>
                    <td>${result.sgpa(arr_data[index].math)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].math))}</td>
                  </tr>
                  <tr>
                    <td>Social Science</td>
                    <td>${arr_data[index].social}</td>
                    <td>${result.sgpa(arr_data[index].social)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].social))}</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>${arr_data[index].science}</td>
                    <td>${result.sgpa(arr_data[index].science)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].science))}</td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>${arr_data[index].religion}</td>
                    <td>${result.sgpa(arr_data[index].religion)}</td>
                    <td>${result.sgrade(result.sgpa(arr_data[index].religion))}</td>
                  </tr>
                </tbody>
              </table>
    
    `
}