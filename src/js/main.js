$(document).ready(() => {
    $('.s-info__tab').click(function (event) {
        event.preventDefault()
        let tab = $('.s-info__tab.active').attr('href')
        let activeTab = $('.s-info__tab.active')
        activeTab.removeClass('active')
        $(this).addClass('active')
        $(tab).removeClass('active')
        $(tab).addClass('hide')
        const tabContent = $(this).attr('href')
        $(tabContent).removeClass('hide')
        $(tabContent).addClass('active')
    })
})
