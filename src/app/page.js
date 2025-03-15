import Profile from "@/components/Card/Profile";
import UpcomingInterview from "@/components/Card/UpcomingInterview";
import Tag from "@/components/Custom/Tag";
import JobSection from "@/components/Sections/JobSection";
import { Description, Header, TitleDescription } from "@/components/Typography";
import Image from "next/image";
import styles from "./index.module.css";
import GlobalSearch from "@/components/Custom/GlobalSearch";

export default function Home() {
  const similar_tags = ['Backend', 'Frontend', 'Graphic Designer']
  const info = [
    { key: "profile_viewer", title: "Profile Visitors", count: 140 },
    { key: "resume_viewer", title: "Resume viewer", count: 20 },
    { key: "my_jobs", title: "My Jobs", count: 88 }
  ]

  return (
    <main className={styles.Home}>
      <div className="container p-4 h-100">
        <div className={'row h-100'}>
          <div className={'col-lg-4 h-100 overflow-auto'}>
            <div className={'d-flex flex-column gap-3'}>

              {/** User Profile Container */}
              <div className={styles.profileInfoContainer}>
                <div className={styles.coverImage}>
                  <Image
                    src="/temp/profile-cover.jpeg"
                    alt="Profile Cover Image"
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <Profile />
                </div>
              </div>

              {/** User Stats Container */}
              <div className={styles.infoContainer}>
                {info.map((item) => {
                  return <li className={styles.info} key={item.key}>
                    <Description
                      text={item.title}
                    />
                    <TitleDescription
                      text={item.count}
                      classes="color-primary"
                    />
                  </li>
                })}
              </div>

              {/** User Calender Event Container */}
              <UpcomingInterview />
            </div>
          </div>
          <div className={'col-lg-8 py-2 h-100'}>
            <div className={styles.jobsContainer}>
              <Header
                text={<>Find your Dream Job, <span className="color-primary">Albert!</span></>}
              />
              <Description
                text="Explore the latest job openings and apply for the best opportunities available today!"
                classes="mt-2"
              />

              <GlobalSearch />
              <div className="d-flex flex-row align-items-center gap-3 my-4">
                <Description
                  text="Similar:"
                  classes="text-color"
                />
                <Tag
                  value={similar_tags}
                />
              </div>
              <div className={styles.sectionContainer}>
                <JobSection
                  title='Featured Jobs'
                  classes="mt-3 mb-5"
                />
                <JobSection
                  title='Recommended Jobs'
                  is_promoted={false}
                  item_length={8}
                  classes="my-5"
                />
                <JobSection
                  title='Latests Jobs'
                  is_promoted={false}
                  item_length={8}
                  classes="my-5"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
