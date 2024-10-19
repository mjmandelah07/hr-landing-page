import { Container, Box, Card, CardContent, Typography } from "@mui/material";

const services = [
  { title: "Recruitment", description: "We help you find the best talent." },
  { title: "Training", description: "Customized training for your staff." },
  { title: "Consulting", description: "Expert HR consulting services." },
];

const Services = () => {
  return (
    <Container maxWidth="lg" id="services" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <Card key={index} sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography>{service.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
