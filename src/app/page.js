import Tag from "@/components/Custom/Tag";
import { Description, Header } from "@/components/Typography";
import styles from "./index.module.css";
import JobSection from "@/components/Sections/JobSection";

export default function Home() {
  const similar_tags = ['Backend', 'Frontend', 'Graphic Designer']

  return (
    <main className={styles.Home}>
      <div className="container p-4">
        <div className={'row'}>
          <div className={'col-lg-4'}>
            <div className={styles.profileInfo}>

            </div>
          </div>
          <div className={'col-lg-8 py-2'}>
            <div className={styles.jobsContainer}>
              <Header
                text={<>Find your Dream Job, <span className="color-primary">Albert!</span></>}
              />
              <Description
                text="Explore the latest job openings and apply for the best opportunities available today!"
                classes="mt-2"
              />
              <div className="d-flex flex-row align-items-center gap-3 my-4">
                <Description
                  text="Similar:"
                  classes="text-color"
                />
                <Tag
                  value={similar_tags}
                />
              </div>
              <JobSection
                title='Featured Jobs'
                classes="my-5"
              />
              <JobSection
                title='Recommended Jobs'
              />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
