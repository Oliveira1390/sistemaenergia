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
-- Table structure for table `ordemdeservico`
--

DROP TABLE IF EXISTS `ordemdeservico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordemdeservico` (
  `ID_OrdemDeServico` int NOT NULL,
  `TipoOrdem` varchar(50) NOT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `DataDeSolicitacao` varchar(15) DEFAULT NULL,
  `ID_Usuario` int NOT NULL,
  `ID_UnidadeConsumidora` int NOT NULL,
  PRIMARY KEY (`ID_OrdemDeServico`),
  KEY `ID_Usuario` (`ID_Usuario`),
  KEY `ID_UnidadeConsumidora` (`ID_UnidadeConsumidora`),
  CONSTRAINT `ordemdeservico_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`),
  CONSTRAINT `ordemdeservico_ibfk_2` FOREIGN KEY (`ID_UnidadeConsumidora`) REFERENCES `unidadeconsumidora` (`ID_UnidadeConsumidora`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordemdeservico`
--

LOCK TABLES `ordemdeservico` WRITE;
/*!40000 ALTER TABLE `ordemdeservico` DISABLE KEYS */;
INSERT INTO `ordemdeservico` VALUES (501,'Manutencao','Fechado','1/2/2023',23,1001),(502,'Reparo','Fechado','3/11/2023',24,1002),(503,'Reparo','Fechado','6/4/2022',30,1003),(504,'Visita','Fechado','1/2/2023',28,1004),(505,'Inspecao','Fechado','10/13/2022',24,1005),(506,'Reparo','Fechado','10/17/2022',18,1006),(507,'Inspecao','Fechado','6/1/2022',17,1007),(508,'Reparo','Aberto','2/24/2023',12,1008),(509,'Manutencao','Fechado','1/18/2023',15,1009),(510,'Visita','Fechado','1/4/2023',16,1010),(511,'Inspecao','Fechado','11/13/2022',18,1011),(512,'Reparo','Fechado','3/21/2023',15,1012),(513,'Reparo','Fechado','3/6/2023',16,1013),(514,'Manutencao','Fechado','4/13/2023',25,1014),(515,'Reparo','Aberto','8/13/2022',19,1015),(516,'Manutencao','Fechado','10/4/2022',23,1016),(517,'Inspecao','Fechado','5/28/2022',11,1017),(518,'Reparo','Fechado','3/22/2023',18,1018),(519,'Visita','Fechado','5/16/2023',22,1019),(520,'Inspecao','Fechado','8/1/2022',14,1020),(521,'Reparo','Aberto','2/27/2023',14,1021),(522,'Reparo','Fechado','2/20/2023',19,1022),(523,'Manutencao','Fechado','9/18/2022',15,1023),(524,'Reparo','Fechado','9/27/2022',28,1024),(525,'Reparo','Fechado','2/27/2023',28,1025),(526,'Visita','Fechado','5/3/2023',17,1026),(527,'Manutencao','Fechado','1/24/2023',26,1027),(528,'Inspecao','Fechado','7/8/2022',16,1028),(529,'Visita','Em Andamento','3/1/2023',18,1029),(530,'Manutencao','Fechado','11/14/2022',18,1030),(531,'Visita','Fechado','6/6/2022',22,1031),(532,'Manutencao','Fechado','10/29/2022',19,1032),(533,'Inspecao','Fechado','8/13/2022',17,1033),(534,'Visita','Fechado','11/4/2022',20,1034),(535,'Reparo','Fechado','2/4/2023',29,1035),(536,'Reparo','Fechado','10/17/2022',16,1036),(537,'Inspecao','Fechado','10/7/2022',25,1037),(538,'Reparo','Fechado','4/17/2023',29,1038),(539,'Manutencao','Aberto','6/25/2022',16,1039),(540,'Reparo','Fechado','8/5/2022',22,1040),(541,'Inspecao','Fechado','4/6/2023',12,1041),(542,'Reparo','Aberto','12/14/2022',17,1042),(543,'Reparo','Fechado','7/13/2022',27,1043),(544,'Visita','Fechado','10/24/2022',13,1044),(545,'Inspecao','Em Andamento','11/1/2022',16,1045),(546,'Reparo','Fechado','11/12/2022',11,1046),(547,'Reparo','Fechado','9/3/2022',28,1047),(548,'Reparo','Em Andamento','11/14/2022',18,1048),(549,'Visita','Aberto','12/31/2022',29,1049),(550,'Inspecao','Fechado','12/22/2022',16,1050),(551,'Visita','Fechado','11/30/2022',12,1051),(552,'Reparo','Fechado','7/14/2022',27,1052),(553,'Inspecao','Fechado','2/3/2023',24,1053),(554,'Visita','Fechado','11/7/2022',29,1054),(555,'Reparo','Fechado','6/17/2022',17,1055),(556,'Reparo','Fechado','7/13/2022',29,1056),(557,'Manutencao','Fechado','5/22/2022',19,1057),(558,'Manutencao','Fechado','8/24/2022',28,1058),(559,'Manutencao','Fechado','5/4/2023',22,1059),(560,'Inspecao','Aberto','9/15/2022',18,1060),(561,'Manutencao','Fechado','11/7/2022',29,1061),(562,'Manutencao','Aberto','10/12/2022',15,1062),(563,'Visita','Fechado','1/13/2023',12,1063),(564,'Inspecao','Fechado','1/28/2023',18,1064),(565,'Inspecao','Fechado','5/21/2023',21,1065),(566,'Reparo','Aberto','2/25/2023',16,1066),(567,'Manutencao','Fechado','5/30/2022',28,1067),(568,'Inspecao','Fechado','7/9/2022',18,1068),(569,'Visita','Fechado','10/31/2022',17,1069),(570,'Inspecao','Fechado','4/3/2023',13,1070),(571,'Visita','Aberto','9/16/2022',14,1071),(572,'Reparo','Fechado','1/9/2023',27,1072),(573,'Inspecao','Em Andamento','1/12/2023',15,1073),(574,'Manutencao','Fechado','12/3/2022',24,1074),(575,'Reparo','Fechado','8/15/2022',20,1075),(576,'Inspecao','Fechado','1/21/2023',17,1076),(577,'Visita','Em Andamento','9/30/2022',19,1077),(578,'Manutencao','Fechado','1/28/2023',29,1078),(579,'Reparo','Fechado','5/8/2023',13,1079),(580,'Reparo','Aberto','1/22/2023',27,1080),(581,'Inspecao','Fechado','12/25/2022',27,1081),(582,'Visita','Fechado','9/11/2022',19,1082),(583,'Reparo','Fechado','9/1/2022',20,1083),(584,'Manutencao','Fechado','2/13/2023',28,1084),(585,'Inspecao','Fechado','7/30/2022',14,1085),(586,'Reparo','Fechado','7/31/2022',21,1086),(587,'Manutencao','Fechado','11/26/2022',25,1087),(588,'Manutencao','Em Andamento','12/20/2022',16,1088),(589,'Manutencao','Fechado','1/4/2023',29,1089),(590,'Inspecao','Fechado','2/9/2023',18,1090),(591,'Manutencao','Fechado','8/16/2022',17,1091),(592,'Inspecao','Fechado','12/15/2022',25,1092),(593,'Reparo','Fechado','2/1/2023',20,1093),(594,'Manutencao','Fechado','11/21/2022',12,1094),(595,'Manutencao','Fechado','5/18/2023',21,1095),(596,'Visita','Aberto','8/23/2022',19,1096),(597,'Visita','Em Andamento','7/27/2022',20,1097),(598,'Inspecao','Fechado','1/7/2023',28,1098),(599,'Visita','Fechado','7/4/2022',13,1099),(600,'Reparo','Fechado','8/17/2022',30,1100);
/*!40000 ALTER TABLE `ordemdeservico` ENABLE KEYS */;
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
