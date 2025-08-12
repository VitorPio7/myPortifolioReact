import styles from "./css/carrossel.module.css";
import {AmazonwebservicesWordmark} from './svg/AmazonIcon'
import { React } from "./svg/React";
import { Nodejs } from "./svg/Node";
import { Nestjs } from "./svg/Nest";
import { MongodbWordmark } from "./svg/MongoDb";
import { FileTypeJest } from "./svg/Jest";
import { Java } from "./svg/Java";
import { Javascript } from "./svg/JavaScript";
import { FileTypeDocker2 } from "./svg/Docker";
import { Rabbitmq } from "./svg/Rabbitmq";
import { AwsEc2 } from "./svg/AwsEc2";
import { AwsS3 } from "./svg/AwsS3";
import { Redis } from "./svg/Redis";
import {PostgresqlWordmark} from "./svg/Postgres"
const logoIcons = [
  <Nodejs />,
  <AmazonwebservicesWordmark />,
  <React />,
  <Nestjs />,
  <MongodbWordmark />,
  <FileTypeJest />,
  <Java />,
  <Javascript />,
  <FileTypeDocker2 />,
  <Rabbitmq />,
  <AwsEc2 />,
  <AwsS3 />,
  <Redis />,
  <PostgresqlWordmark/>
];

export default function Carousel(){
return (
  <section className={styles.logoCarouselSection}>
    <div className={styles.logoCarousel}>
      <div className={styles.logoSlide}>
        {logoIcons.map((LogoComponent, index) => (
          <div className={styles.logoItem} key={index}>
            {LogoComponent}
          </div>
        ))}
      </div>
    </div>
  </section>
);
};


