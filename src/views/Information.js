import React from 'react';
import '../css/information.scss';

class Information extends React.Component {
  render() {
    const photos = [
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41496119_1852333134853508_5208368464602857472_o.jpg?_nc_cat=103&_nc_oc=AQmqIQA39hkizWvOBV8H_KTGATFHJFxd_vtn4H988DbmG5M5-FxbSZOeDhNUgDLw9y4&_nc_ht=scontent.fybz2-2.fna&oh=51cd8c28a0651db5bfbdafba83f08c9d&oe=5E05A107",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41498828_1852333911520097_8322520633841811456_o.jpg?_nc_cat=108&_nc_oc=AQk5JF04J3YftrkquizzZZofAR91P_qvAzuaSF6P-lyHQDHk0OxsMgk-oTlNp-TZjCc&_nc_ht=scontent.fybz2-1.fna&oh=fc5028847097d2d43a524ed78b04dfee&oe=5E162C0A",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41673951_1852333568186798_6256833229244858368_o.jpg?_nc_cat=111&_nc_oc=AQl8CMEqaSqAugoekhV4VHwl4gQBWWTvwoJOrHzwIcu-OpmNJ72I_xCmnuyB57P7ChQ&_nc_ht=scontent.fybz2-1.fna&oh=4f333b0579f07c4fbfd2963dcaa5dd7b&oe=5DC83F3E",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41361764_1852332608186894_5193623807515951104_o.jpg?_nc_cat=110&_nc_oc=AQk6Z-7DA2P_PP0kgYHB3mD2691qiqNWsB_w5kWwlCCsAemujOef6GXcDMBRwHK3z4M&_nc_ht=scontent.fybz2-1.fna&oh=f35d5fe71080664481947591abb78b64&oe=5E14722B",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41543125_1852333631520125_4288312042311385088_o.jpg?_nc_cat=105&_nc_oc=AQkM2fsvFw119lecBsvjLPWZJFaz3kugfLLRcdlVpBOmxx7fTeq36p15Kqz88vhkYkw&_nc_ht=scontent.fybz2-2.fna&oh=9189f55a9ce11e2120bce6e574de391b&oe=5DCDF8FC",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41729572_1852333361520152_3334692374747021312_n.jpg?_nc_cat=107&_nc_oc=AQmR-aAf7fdW8kDM3FUcp0Ugm5194Qy6g0-MQf4u8uNxZijex8zEeime1rZ9zvUB7ds&_nc_ht=scontent.fybz2-2.fna&oh=1471be02d815e5f6117fa3bfd1f0c0e8&oe=5DD2B732",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41580181_1852334128186742_4957737761168687104_o.jpg?_nc_cat=106&_nc_oc=AQl--yXIfGYw4CdgskmUPw2NehjcGhJFlEEGcWwK_AEclyh-lMwN9x-TzTSp_vjly3Y&_nc_ht=scontent.fybz2-2.fna&oh=d55c811c272502329d3c0a777d0c0700&oe=5DC9BEA6",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41562900_1852334074853414_3273105082048053248_o.jpg?_nc_cat=107&_nc_oc=AQkEN3LUUCrx8tkApBS_2kRQremYC0ji3aM4g5MrAqe6ygLX5r1z1tI54tiFch69Pcw&_nc_ht=scontent.fybz2-2.fna&oh=8252ea26616f996974310f591d7bae2c&oe=5E0A1B59",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41600005_1852333951520093_6709644523091263488_o.jpg?_nc_cat=104&_nc_oc=AQmL6esh-zynW95_QIACrILqO6h364_aF3N7QuG8o1AFMMfsadXYLVcOXoanZBLFzt4&_nc_ht=scontent.fybz2-2.fna&oh=3ccb458ead9d7d1ee34489d562fdac95&oe=5DC8B0C2",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41499516_1852333154853506_4271843587215327232_o.jpg?_nc_cat=109&_nc_oc=AQlVNtjmFO1HachIdo2dM67vsddihsmwK8V0rcfZqlftzfbtNbJ_6eVDyeAdQRBd8C0&_nc_ht=scontent.fybz2-1.fna&oh=3290f8b1376c7b1308851504e4492cf6&oe=5E06AA3C",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41591380_1852333341520154_870396077679837184_o.jpg?_nc_cat=102&_nc_oc=AQkZnFsoHBTsKiyHIY_Ne91PZv5p1V3d1fmtYn5lJIde86MDOkQt-sop47PCuMj9yfo&_nc_ht=scontent.fybz2-2.fna&oh=36f2b18240201742e506191af402ab8c&oe=5E06F414",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41395085_1852332524853569_7062155535868493824_o.jpg?_nc_cat=110&_nc_oc=AQm75b3r3q7yqvOgjaGEjD7akhrpvE-znzfRYjmfDm7J7qcW1ObRn3e2KaoJI0NMTH0&_nc_ht=scontent.fybz2-1.fna&oh=fa7d31e89c0c32a2e90bafabfb7ad8a7&oe=5DDC5CB3",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41542261_1852332334853588_4787245649919737856_o.jpg?_nc_cat=105&_nc_oc=AQkVhd2lX0Yqm5Pf1J7HkKLkR7iF4leWOdI1KT3JxE2SeRiP_G3H6hiLBJsqW62T3qQ&_nc_ht=scontent.fybz2-2.fna&oh=c5004e64e170edbd257e2ccf2a1e1753&oe=5DD0D8C2",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41682244_1852332514853570_477794135059726336_o.jpg?_nc_cat=110&_nc_oc=AQnpet4d55Fp9eh22FDahEaURisAJVSj5vqNW51-Xieauccf1K1IS6LyFiEs_DKC3Jc&_nc_ht=scontent.fybz2-1.fna&oh=cbb4ddc17f87268abe3a7b345eafa23c&oe=5E109EB5",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41508769_1852333898186765_6243952510655004672_o.jpg?_nc_cat=106&_nc_oc=AQkiPfLoIsmm6Ci3PmYPd88BOr5jSDvYctD8tuv2IniNR4Vfpem2dubVVIW1DSdsSoE&_nc_ht=scontent.fybz2-2.fna&oh=18bbee40b503347f276bde4b41edb91b&oe=5DD81E83",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41486278_1852333884853433_8648784362738810880_o.jpg?_nc_cat=111&_nc_oc=AQktHX91KJqhtjrLudC2GGqblMotAFnQuYvELNgDuYmCHWdnQ5njsRBvKJ0_S3HfqvM&_nc_ht=scontent.fybz2-1.fna&oh=42280fb15fff6d4a3a496d63f7ed601a&oe=5DD2A1C0",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41552601_1852333748186780_1791004824175640576_o.jpg?_nc_cat=108&_nc_oc=AQlTzxIRZTpp1BFbnKpNjyTPcGMpEKIsyN5dpbx0SpGSGZH2L8FW2KxO4zCe1Vw8lns&_nc_ht=scontent.fybz2-1.fna&oh=3242efcfb84e86305153f9955e6d8a97&oe=5E1471E0",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41497359_1852334098186745_1106337103903457280_o.jpg?_nc_cat=108&_nc_oc=AQnLjrSRIMYk1l9nnz9ApCTkrPhp-q_dYZ4Lo79LCow0X5Mk70KnF1Dj7ri-J94-dmE&_nc_ht=scontent.fybz2-1.fna&oh=b7886208b894a12b1f4bb41d90b2d07c&oe=5E0F3569",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41550884_1852332818186873_5879796389839372288_o.jpg?_nc_cat=109&_nc_oc=AQnSHYBiXmbbZ7qj4HGLan5gGD9dXnQJrpII2FgAw-LBHFg4boa2HnQw9ugYjXThlDk&_nc_ht=scontent.fybz2-1.fna&oh=30534120fdc40d02dce7a1f75f038777&oe=5DD1F332",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41527472_1852333741520114_545326452770340864_o.jpg?_nc_cat=106&_nc_oc=AQlHsGFKrDjIpizx9PxFeBpZtbXAHqc7DrdTheTHKGgqwi6IeIEODBsrwBy5wVF5tdE&_nc_ht=scontent.fybz2-2.fna&oh=881bd239a4122a8cf7969edd35b67e5a&oe=5DC99241",
      "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/41552530_1852333194853502_2237903511423549440_n.jpg?_nc_cat=107&_nc_oc=AQk--t9-1xRAslWqC4UjAnhJeY1zhH6okdt8CrR36bgVOOvfKzrVNpMFPZM7rVxQMjI&_nc_ht=scontent.fybz2-2.fna&oh=9c3fc4a0937a392ec93ca930219b0de8&oe=5DCB57A7",
      "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/41482179_1852332941520194_3499635521393524736_o.jpg?_nc_cat=108&_nc_oc=AQluSjAJ_kM01DmCcxhhWld7PHhncjvNtI4QjqgI6dlxTD60ZZC7iAS50lxQLjQ19zg&_nc_ht=scontent.fybz2-1.fna&oh=6856c4cb548d5de668f9e252a4394229&oe=5DD9BBEC",
  ];
    return (
      <div className="container scroll info-container">
        <div className="row full-screen">

          // Registration info
          <div class="modal fade sched-modal" id="registration" tabindex="-1" role="dialog" aria-labelledby="registraionLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="registrationLabel">Registration</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  This is the alloted time for you to come and confirm your attendance and get your t-shirt. You can also mingle around with
                  your leader and new students and start making friends!
                </div>
              </div>
            </div>
          </div>

          // Opening Ceremony info
          <div class="modal fade sched-modal" id="opening" tabindex="-1" role="dialog" aria-labelledby="openingLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="openingLabel">Opening Ceremony</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  We will start the opening ceremony at 11:30, this is when the event officially starts so don't miss it!
                </div>
              </div>
            </div>
          </div>

          // Professors Panel info
          <div class="modal fade sched-modal" id="prof" tabindex="-1" role="dialog" aria-labelledby="profLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="profLabel">Professors Panel</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  We will introduce you to some professors who will be teaching your first year courses and learn about
                  the program from their perspectives. There will be a Q&A session afterwards.
                </div>
              </div>
            </div>
          </div>

          // Lunch and networking info
          <div class="modal fade sched-modal" id="club" tabindex="-1" role="dialog" aria-labelledby="clubLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="clubLabel">Lunch, Networking and Clubs fair</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  We will serve lunch at 12:30 PM. During this time, you will also get to meet recruiters from technology companies 
                  and meet with some clubs.
                </div>
              </div>
            </div>
          </div>

          // Games info
          <div class="modal fade sched-modal" id="games" tabindex="-1" role="dialog" aria-labelledby="gamesLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="gamesLabel">Activities</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  We will get you to explore the facilities and resources at UofT, especially the Bahen building through a game of
                  scavenger hunts with lots of minigames for you to have fun with!
                </div>
              </div>
            </div>
          </div>

          // Students panel info
          <div class="modal fade sched-modal" id="students" tabindex="-1" role="dialog" aria-labelledby="studentsLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="studentsLabel">Students Panel</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  A few students from the upper years of study will talk to you about their experience studying Computer Science
                  at UofT. There will be a Q&A session afterwards.
                </div>
              </div>
            </div>
          </div>

          // Closing ceremony info
          <div class="modal fade sched-modal" id="closing" tabindex="-1" role="dialog" aria-labelledby="closingLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="closingLabel">Closing Ceremony</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  The orientation will start wrapping up at 4:15.
                </div>
              </div>
            </div>
          </div>

          <div className="intro">
            <h1 className="title">What is the Computer Science Orientation?</h1>
            <p className="about">
              It's that time of the year once again, when school is about to begin. While it is exciting to
              embark onto a new journey and start a new chapter of your life, you might feel nervous or anxious
              about the unknowns. This event is just exactly our way to help you navigate through any doubts or
              struggles you may have. This event features a Q&A session where you can get introduced to the program
              through the perspectives of professors, upper year students, alumni and more, fun activities to get to 
              know one another and make friends with prizes, and lots more! We hope that you are just as thrilled 
              to begin your journey at University of Toronto as we are to meet you in September!
            </p>
            <br/>
            <h1 className="title">The schedule of the orientation</h1>
            <div className="table-responsive">
              <table class="table table-bordered table-hover schedule-table">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-toggle="modal" data-target="#registration">
                    <td>10:30 AM - 11:30 AM</td>
                    <td>Registration</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#opening">
                    <td>11:30 AM - 11:45 AM</td>
                    <td>Opening Ceremony</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#prof"> 
                    <td>11:45 AM - 12:30 PM</td>
                    <td>Professors Panel</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#club">
                    <td>12:30 PM - 1:30 PM</td>
                    <td>Lunch, Networking and Clubs fair</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#games">
                    <td>1:30 PM - 3:15 PM</td>
                    <td>Activities: scavenger hunt, mini-games</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#students">
                    <td>3:15 PM - 4:15 PM</td>
                    <td>Students Panel</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#closing">
                    <td>4:15 PM - 4:30 PM</td>
                    <td>Closing Ceremony</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            <h1 className="title">Location and instructions</h1>
            <p className="about">
              The event will start at the Bahen Centre for Information Technology located at <u>40 St George St, Toronto, ON M5S 2E4.</u>
              <br/>
              Please make note of the following things:
                <ul>
                  <li>You need to bring a piece of ID so we can verify your identification on the day of the event.</li>
                  <li>You will need to sign a media consent form as we will be taking photos throughout the event.</li>
                </ul>
            </p>
            <br/>
            <h1 className="title">Some photos of last year's orientation!</h1>
          </div>
          <div className="frosh-photos">
            <div className="bd-example center">
              <div id="past-frosh-pics" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photos[0]} className="d-block w-100" alt="..."/>
                  </div>
                  {
                    photos.splice(1).map(photo => {
                      return (
                        <div className="carousel-item">
                          <img src={photo} className="d-block w-100" alt="..."/>
                        </div>
                      )
                    })
                  }
                </div>
                <a className="carousel-control-prev" href="#past-frosh-pics" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#past-frosh-pics" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Information;