Feature('Homework');

Scenario('www.fourmodules.com', async ({ I }) => {
    I.amOnPage('https://www.fourmodules.com')
    I.moveCursorTo('.main-menu')
    I.see('About')
    I.click('About')
    I.seeInCurrentUrl('/ielts')
    I.scrollTo('.any_q_btn')
    I.click(locate('.btn').withText("Any Questions?"))
    I.see('Submit', '.modal-footer')
    I.see('How can we help?', '#exampleModalLabel')
    I.click('.close')
    I.dontSee('.modal-dialog')
    I.click('Take Free Demo')
    I.seeInCurrentUrl('/signup')
});

Scenario('www.cleartrip.com', async ({ I }) => {
    const title = await I.grabTitle();
    I.amOnPage('https://www.cleartrip.com')
    // I.see('.d-flex')
    I.click('body > div.p-fixed.l-0.r-0.b-0.t-0.flex.flex-center.flex-middle.z-70 > div > div > div.bg-white.o-hidden.d-flex.flex-column.brLoginNew-4 > div > div.pt-6.pb-6.flex.flex-top.flex-between > div.px-1.flex.flex-middle.nmx-1.pb-1')
    I.click('Hotels')
    I.seeInCurrentUrl('/hotels')
    I.say(title)
});

Scenario('www.boardgamegeek.com', async ({ I }) => {
    I.amOnPage('https://www.boardgamegeek.com/advsearch/boardgame.com')
    I.fillField('q', "Harry Potter and the Sorcerer's Stone Trivia Game")
    I.fillField('#advsearch-yearpublished-min','1999')
    I.fillField('#advsearch-yearpublished-max', '2000')
    // I.click('#advsearch-min-playing-time')
    I.selectOption('#advsearch-min-playing-time', '15')
    I.wait('5000')
    // I.pressKey('enter')
    // I.click('#advsearch-max-playing-time')
    I.selectOption('#advsearch-max-playing-time', '90')
    // I.pressKey('enter')
    I.scrollTo('submit')
    I.click('submit')
    I.see('.primary', "Harry Potter and the Sorcerer's Stone Trivia Game")
    I.say('primary')

});

Scenario('www.spicejet.com', async ({ I }) => {
    I.amOnPage('https://spicejet.com')
    I.click('div[data-testid="round-trip-radio-button"]')
    I.click('div[data-testid="to-testID-origin"]')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-1g40b8q > div > div:nth-child(1) > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1rjd0u6.r-1g94qm0.r-u8s1d.r-8fdsdq > div.css-1dbjc4n.r-b5h31w.r-95jzfe > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-19yat4t.r-1rt2jqs > div.css-1dbjc4n.r-knv0ih.r-1k1q3bj.r-ql8eny.r-1dqxon3 > div:nth-child(1) > div.css-1dbjc4n.r-1awozwy.r-ov7bg.r-z2wwpe.r-utggzx.r-atwnbb.r-cfp7ip')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-1g40b8q > div > div:nth-child(3) > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1rjd0u6.r-1g94qm0.r-u8s1d.r-8fdsdq > div.css-1dbjc4n.r-b5h31w.r-95jzfe > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-19yat4t.r-1rt2jqs > div.css-1dbjc4n.r-knv0ih.r-1k1q3bj.r-ql8eny.r-1dqxon3 > div:nth-child(3) > div:nth-child(1) > div.css-1dbjc4n.r-18u37iz')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-19h5ruw.r-136ojw6 > div > div.css-1dbjc4n.r-1niwhzg.r-z2wwpe.r-17b9qp5.r-1g94qm0.r-h3f8nf.r-u8s1d.r-u3yave.r-8fdsdq > div.css-1dbjc4n.r-14lw9ot.r-11u4nky.r-rs99b7.r-6koalj.r-eqz5dr.r-1pi2tsx.r-pm9dpa.r-1knelpx.r-13qz1uu > div.css-1dbjc4n.r-1euycsn > div.css-1dbjc4n.r-150rngu.r-18u37iz.r-16y2uox.r-1wbh5a2.r-lltvgl.r-buy8e9.r-1sncvnh > div > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-19h5ruw.r-136ojw6 > div > div.css-1dbjc4n.r-1niwhzg.r-z2wwpe.r-17b9qp5.r-1g94qm0.r-h3f8nf.r-u8s1d.r-u3yave.r-8fdsdq > div.css-1dbjc4n.r-14lw9ot.r-11u4nky.r-rs99b7.r-6koalj.r-eqz5dr.r-1pi2tsx.r-pm9dpa.r-1knelpx.r-13qz1uu > div.css-1dbjc4n.r-1euycsn > div.css-1dbjc4n.r-150rngu.r-18u37iz.r-16y2uox.r-1wbh5a2.r-lltvgl.r-buy8e9.r-1sncvnh > div > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)')
    
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-19h5ruw.r-184en5c > div.css-1dbjc4n > div > div')
    //adult
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-19h5ruw.r-184en5c > div.css-1dbjc4n > div > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1rjd0u6.r-1g94qm0.r-h3f8nf.r-u8s1d.r-13qz1uu.r-8fdsdq > div.css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh > div > div:nth-child(1) > div:nth-child(1) > div.css-1dbjc4n.r-1awozwy.r-18u37iz > div.css-1dbjc4n.r-1awozwy.r-19m6qjp.r-y47klf.r-1loqt21.r-eu3ka.r-1777fci.r-1otgn73.r-eafdt9.r-1i6wzkk.r-lrvibr.r-1aockid')
    //child
    I.click('div[data-testid="Children-testID-plus-one-cta"]')
    I.click('div[data-testid="Children-testID-plus-one-cta"]')
    I.click('div[data-testid="Children-testID-plus-one-cta"]')
    //infant
    I.click('div[data-testid="Infant-testID-plus-one-cta"]')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-19h5ruw.r-184en5c > div:nth-child(2) > div.css-1dbjc4n.r-14lw9ot.r-11u4nky.r-z2wwpe.r-1phboty.r-rs99b7.r-1loqt21.r-13awgt0.r-ymttw5.r-5njf8e.r-1otgn73')
    I.click('#main-container > div > div.css-1dbjc4n.r-14lw9ot > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-vgw6uq.r-156q2ks.r-11ict49.r-8uuktl.r-136ojw6 > div.css-1dbjc4n.r-1pcd2l5.r-1uwte3a.r-m611by.r-bnwqim > div.css-1dbjc4n.r-18u37iz.r-19h5ruw.r-184en5c > div:nth-child(2) > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1rjd0u6.r-1g94qm0.r-h3f8nf.r-u8s1d.r-8fdsdq > div.css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh > div > div:nth-child(3)')
    // I.selectOption('Agra (AGR)', 'From')
    // I.selectOption('Jaipur (JAI)', 'To')
    // I.selectOption('May 1, 2023', 'departure date')
    // I.selectOption('MAy 15, 2023', 'return date')
    // I.selectOption('2 adults 3 children 1 infant')
    // I.selectOption('USD', 'currency')
    I.click('div[data-testid="home-page-flight-cta"]')
    const url = await I.grabCurrentUrl()
    I.say('url')
});