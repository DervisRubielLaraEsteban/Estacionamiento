-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 05:08:32
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parking`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket1`
--

CREATE TABLE `ticket1` (
  `ID` int(11) NOT NULL,
  `Marca_Auto` varchar(255) NOT NULL,
  `Lugar_Area` varchar(255) NOT NULL,
  `Costo_hora` int(4) NOT NULL,
  `Tiempo_Actual` timestamp NOT NULL DEFAULT current_timestamp(),
  `Estado` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ticket1`
--

INSERT INTO `ticket1` (`ID`, `Marca_Auto`, `Lugar_Area`, `Costo_hora`, `Tiempo_Actual`, `Estado`) VALUES
(1, 'Toyota', 'Area A', 12, '2022-12-14 16:18:47', ''),
(2, 'BMW', 'Area A', 12, '2022-12-15 01:20:13', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket2`
--

CREATE TABLE `ticket2` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Placa` varchar(255) NOT NULL,
  `Hora_aparcada` timestamp NOT NULL DEFAULT current_timestamp(),
  `Hora_salida` time DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ticket2`
--

INSERT INTO `ticket2` (`ID`, `Nombre`, `Placa`, `Hora_aparcada`, `Hora_salida`) VALUES
(1, 'Marcos', 'Q3R63FK7', '2022-12-14 14:15:21', '11:22:05');
(2, 'Charlie', 'R3Y6K99D', '2022-12-14 11:00:00', '11:10:00');
--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ticket1`
--
ALTER TABLE `ticket1`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `ticket2`
--
ALTER TABLE `ticket2`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ticket1`
--
ALTER TABLE `ticket1`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ticket2`
--
ALTER TABLE `ticket2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
