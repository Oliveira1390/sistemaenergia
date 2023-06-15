-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemaenergia
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID_Usuario` int NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `DataAdmissao` varchar(15) DEFAULT NULL,
  `Matricula` varchar(50) DEFAULT NULL,
  `Estagiario` varchar(3) DEFAULT NULL,
  `Departamento` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Nanette Fetherstone','01/26/2013','906-CxKxty','Nao','Financas'),(2,'Vittorio Zanioletti','04/26/2010','269-zq5w0F','Nao','Financas'),(3,'Cammi Kitchinham','08/13/2013','394-Tzi1AB','Sim','Financas'),(4,'Buck Lownie','05/22/2010','100-72tg4I','Nao','Financas'),(5,'Craig Guillet','05/20/2013','981-wWBUu5','Sim','Financas'),(6,'Broderick Aleshintsev','05/15/2014','278-778Whd','Sim','Financas'),(7,'Kimberli Dare','04/23/2012','694-4AYVEP','Nao','Financas'),(8,'Tim Scotting','09/15/2010','045-Mtkl9x','Nao','Financas'),(9,'Olivia Perryn','05/16/2010','696-Nk09Gx','Sim','Financas'),(10,'Maisie Ramsdell','04/14/2013','355-Bu2xLK','Nao','Financas'),(11,'Seana Stearne','01/08/2013','512-bblMd2','Nao','Tecnico'),(12,'Sorcha Fritschel','04/21/2013','606-cDIziS','Sim','Tecnico'),(13,'Hans Blois','08/01/2014','378-fDhYFr','Nao','Tecnico'),(14,'Wallace O\' Markey','03/26/2013','506-VX0A0s','Nao','Tecnico'),(15,'Bernie Mancer','01/24/2012','918-3WMG5H','Sim','Tecnico'),(16,'Harmony Kilrow','03/25/2014','085-wgpu0c','Sim','Tecnico'),(17,'Aprilette Fish','02/24/2014','407-HCFZXe','Sim','Tecnico'),(18,'Biddy Knights','09/08/2013','789-nfkNUt','Nao','Tecnico'),(19,'Lombard O\'Collopy','09/02/2010','165-jxARKs','Sim','Tecnico'),(20,'Aarika Adamec','03/06/2013','153-Gj9KXD','Sim','Tecnico'),(21,'Marguerite Garner','02/04/2011','813-qmnTyz','Nao','Tecnico'),(22,'Lucina Woltman','12/23/2011','231-iOufrC','Nao','Tecnico'),(23,'Lillian Regnard','09/01/2012','811-egE67R','Sim','Tecnico'),(24,'Colleen Heinert','03/12/2010','002-N5sjaO','Nao','Tecnico'),(25,'Giorgio Shambrooke','01/18/2013','949-55yaro','Nao','Tecnico'),(26,'Kathleen Nenci','02/23/2011','471-vjxTHp','Nao','Tecnico'),(27,'Gabriel Suermeiers','12/15/2014','033-EXntlr','Nao','Tecnico'),(28,'Mair Idwal Evans','08/10/2013','212-mzgbHP','Nao','Tecnico'),(29,'Cole Haensel','12/26/2012','149-aZUQN2','Nao','Tecnico'),(30,'Madelin Crummay','11/08/2014','662-hRClvV','Nao','Tecnico'),(31,'Korella Halso','03/20/2014','489-7T7li4','Nao','Central'),(32,'Ivette Hrachovec','11/28/2011','352-mmlkMI','Sim','Central'),(33,'Cornie Hehir','03/08/2010','533-C0Nhxx','Sim','Central'),(34,'Dev Handasyde','08/18/2012','234-8RRwPa','Nao','Central'),(35,'Cyrille Van Hove','01/15/2012','170-cZfxKM','Nao','Central'),(36,'Ky Barkus','11/19/2014','312-XAD3zP','Nao','Central'),(37,'Tracy Blunn','08/17/2013','273-VjF9sZ','Nao','Central'),(38,'Doria Jambrozek','05/05/2013','485-Jlgm5s','Nao','Central'),(39,'Dunn Becraft','10/26/2014','453-4re3Cx','Nao','Central'),(40,'Phylis McShee','06/06/2010','391-h3Eab5','Sim','Central'),(41,'Ken Crowhurst','04/23/2014','644-xNAIhn','Sim','Central'),(42,'Cullie Burehill','04/18/2012','629-2Gda2S','Nao','Central'),(43,'Savina Ellif','07/10/2010','833-RIAPE2','Sim','Central'),(44,'Emogene Wegner','08/30/2014','855-6CiBLR','Sim','Central'),(45,'Ave Rotchell','10/06/2013','875-aby2Vm','Sim','Central');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22 16:57:19
