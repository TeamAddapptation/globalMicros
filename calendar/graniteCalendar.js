export default function graniteCalendar(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;

  const sidepane = document.getElementById("p__sidepane");

  const calendarCont = document.getElementById(id);
  document.addEventListener("DOMContentLoaded", function () {
    var calendar = new FullCalendar.Calendar(calendarCont, {
      initialView: "dayGridMonth",
      events: r,
      eventClick: function (info) {
        info.jsEvent.preventDefault();
        sidepane.style.width = "40vw";
      },
    });
    calendar.render();
  });
}

// const calendarEl = document.getElementById('calendar');

//     const calendar = new FullCalendar.Calendar(calendarEl, {
//       plugins: [ 'interaction', 'dayGrid', 'dayjsPlugin'],
//       defaultDate: '<%= Date.today %>',
//       editable: true,
//       eventLimit: true, // allow "more" link when too many events
//       events: [
//         {
//           groupId: 'familyInterviews', // recurrent events in this group move together
//           daysOfWeek: [ '5' ],
//           startRecur: '<%= Date.today + 1 %>',
//           title: "\nFamily Interview",
//           startTime: '10:00:00',
//           endTime: '12:00:00',
//           textColor: "#ffffff",
//           color: "<%= @primary_color %>"
//         }
//       ],
//       displayEventEnd: true,

//       eventClick: function(info) {
//         // -- Clicking on a date will open the side pane where the user confirms the date
//         console.log(dayjs(info.event.start).format("YYYY-MM-DDThh:mm:ssZ"))
//         const date = dayjs(info.event.start).format("YYYY-MM-DD");
//         const link = document.createElement('a')
//         link.classList.add('a__side_pane_link','confirm-link')
//         document.getElementById("calendar-container").append(link)
//         link.href =`/confirm_interview?interview=family&date=${date}&contract=<%=@application.first.Family_Contract__c%>&session_id=<%= @application.first.Academic_Session__c%>`
//         setTimeout(function(){
//           link.click();
//           document.querySelector(".confirm-link").remove();
//         }, 400);

//       },

//     });
//     calendar.render();

//   });
