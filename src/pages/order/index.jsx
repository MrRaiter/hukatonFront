import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Image } from 'material-ui-image';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useParams } from 'react-router';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { grey } from '@material-ui/core/colors';
import { contracts } from '../../constants/contracts';
import { reports } from '../../constants/reports';
import { companies } from '../../constants/companies';

import ContractCard from '../../components/contract-card';

import styles from './Order.module.scss';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    minHeight: 350,
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.35)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const OrderPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const order = contracts[0];
  const handleDownload = (e) => {
    console.log('Download');
  };

  return (
    <>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${order.image})` }}
      >
        {/* Increase the priority of the hero background image */}
        <img
          style={{ display: 'none' }}
          src={order.image}
          alt={order.imageText}
        />
        <div className={classes.overlay} />
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {order.name}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="md">
        <section>
          <div className={styles.TopBanner}>
            <div className={styles.Content}>
              <div className={styles.TopInfo}>
                <Link href={`/companies/${order.publisher.id}`}>
                  <div className={styles.CompanyCard}>
                    <Avatar variant="square" src={order.publisher.image} />
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      className={styles.CompanyName}
                    >
                      {order.publisher.company_name}
                    </Typography>
                  </div>
                </Link>

                <Chip
                  label={order.created_at.toLocaleDateString()}
                  color="primary"
                />
              </div>
              <Typography
                className={styles.Description}
                variant="body1"
                align="justify"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {order.description}
              </Typography>
            </div>
          </div>
        </section>
        <section className={styles.ContractorsSection}>
          <div className={styles.SectionTitleRow}>
            <Typography className={styles.SectionTitle} variant="h5">
              Contractors
            </Typography>
            <Button href="#text-buttons" color="primary">
              View All
            </Button>
          </div>
          <Divider />
          <Grid container spacing={2} style={{ marginTop: 15 }}>
            {companies.map((company) => (
              <Grid item xs={4}>
                <ContractCard
                  title={company.company_name}
                  image={company.image_banner}
                  description={company.description}
                  buttonTitle="Read Full Overview"
                  onClick={() => {
                    console.log('Click company');
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </section>
        <section className={styles.ReportsSection}>
          <div className={styles.SectionTitleRow}>
            <Typography className={styles.SectionTitle} variant="h5">
              Reports
            </Typography>
            <Button href="#text-buttons" color="primary">
              View All
            </Button>
          </div>
          <Divider />
          <Grid container spacing={2} style={{ marginTop: 15 }}>
            {reports.map((report) => (
              <Grid item xs={12}>
                <Card>
                  <CardActionArea className={styles.ReportCard}>
                    <div className={styles.ReportTitle}>
                      <Typography variant="h6">
                        {`#${report.id}: ${report.title}`}
                      </Typography>
                      <div className={styles.DownloadSection}>
                        <Typography variant="body1">
                          {report.date.toLocaleDateString()}
                        </Typography>
                        <IconButton
                          color="primary"
                          aria-label="download report"
                          component="span"
                          onClick={handleDownload}
                        >
                          <GetAppIcon />
                        </IconButton>
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </>
  );
};

export default OrderPage;
