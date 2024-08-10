```md
# Logistic System Database Structure

## Tables

### 1. Drivers Table

```sql
CREATE TABLE drivers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(155) NOT NULL
);
```

- **id**: Identificador único del conductor.
- **name**: Nombre del conductor.

### 2. Vehicles Table

```sql
CREATE TABLE vehicles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  model VARCHAR(100) NOT NULL,
  year YEAR,
  drivers_id INT,
  FOREIGN KEY (drivers_id) REFERENCES drivers(id)
);
```

- **id**: Identificador único del vehículo.
- **model**: Modelo del vehículo.
- **year**: Año de fabricación del vehículo.
- **drivers_id**: Referencia al conductor asignado.

### 3. Warehouses Table

```sql
CREATE TABLE warehouses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(200),
  drivers_id INT,
  vehicles_id INT,
  FOREIGN KEY (drivers_id) REFERENCES drivers(id),
  FOREIGN KEY (vehicles_id) REFERENCES vehicles(id)
);
```

- **id**: Identificador único del almacén.
- **name**: Nombre del almacén.
- **location**: Ubicación del almacén.
- **drivers_id**: Referencia al conductor asignado.
- **vehicles_id**: Referencia al vehículo asignado.

### 4. Shipments Table

```sql
CREATE TABLE shipments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  item VARCHAR(150) NOT NULL,
  quantity INT,
  warehouse_id INT,
  vehicles_id INT,
  drivers_id INT,
  FOREIGN KEY (warehouse_id) REFERENCES warehouses(id),
  FOREIGN KEY (vehicles_id) REFERENCES vehicles(id),
  FOREIGN KEY (drivers_id) REFERENCES drivers(id)
);
```

- **id**: Identificador único del envío.
- **item**: Descripción del artículo.
- **quantity**: Cantidad del artículo.
- **warehouse_id**: Referencia al almacén de origen.
- **vehicles_id**: Referencia al vehículo utilizado.
- **drivers_id**: Referencia al conductor asignado.
```

## Summary

- **drivers**: Contiene la información de los conductores.
- **vehicles**: Contiene la información de los vehículos, con una referencia al conductor asignado.
- **warehouses**: Contiene la información de los almacenes, con referencias al conductor y vehículo asignados.
- **shipments**: Contiene la información de los envíos, con referencias al almacén, vehículo y conductor relacionados.
```