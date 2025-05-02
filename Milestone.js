function generateMilestone() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const race = document.getElementById("race").value;

    // 根据用户输入生成一个简单的里程碑（可以根据需要扩展逻辑）
    let milestone = '';

    if (age < 18) {
        milestone = "study hard and improve every day.";
    } else if (age < 25) {
        milestone = "get a job or apply for higher education.";
    } else if (age < 30) {
        milestone = "settle down or hit a big career goal.";
    } else if (age < 40) {
        milestone = "start a family.";
    } else if (age < 60) {
        milestone = "prepare for your retirement.";
    } else if (age >= 60) {
        milestone = "think about your death and your next birth.";
    }

    // 将结果显示在网页上
    document.getElementById("result").innerHTML = `${name}, go ${milestone}<br><br>It's the time.`;
    document.getElementById("content").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("page-title").style.display = 'none'; 
}