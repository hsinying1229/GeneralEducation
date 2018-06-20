var topic=[
    "中心會議",
    "課程會議",
    "教評會議",
    "評鑑會議",
    "TA工作坊"
];

var startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);
