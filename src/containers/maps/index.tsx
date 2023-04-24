import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addArrivalPoint, addStartPoint } from '../../../store/maps/actions';
import { getArrivalPoint, getStartPoint } from '../../../store/maps/selectors';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Point } from '../../../store/maps/types';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { COLORS } from '../../utils/colors';
import { styles } from './styles';

enableLatestRenderer();

const Maps = () => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const changeStartPoint = () => {
    dispatch(
      // ADD START POINT (STATIC POINT)
      addStartPoint({
        latitude: 34.22077,
        longitude: -4.00602,
      }),
    );
  };
  const changeArrivalPoint = () => {
    dispatch(
      // ADD ARRIVAL POINT (STATIC POINT)
      addArrivalPoint({
        latitude: 33.589623,
        longitude: -7.591892,
      }),
    );
  };

  // ADD NEW POINTS AND CHANGE IN STORE WITH REDUX
  useEffect(() => {
    changeStartPoint();
    changeArrivalPoint();
  }, []);

  // GET START POINT AND ARRIVAL POINT FROM THE STORE
  const startPoint = useSelector(getStartPoint);
  const arrivalPoint = useSelector(getArrivalPoint);

  const handleRegion = (point: Point) => {
    return {
      latitude: point.latitude,
      longitude: point.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
  };

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    if (hours === 0) {
      return `${minutes} min`;
    }
    return `${hours} h ${minutes} min`;
  };

  useEffect(() => {
    mapRef?.current?.animateToRegion(handleRegion(startPoint), 3 * 1000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.distanceContainer}>
        <Text style={styles.text}>Distance between the two Points is :</Text>
        <Text style={styles.text}>{distance.toFixed(2)} KM</Text>
        <Text style={styles.text}>{toHoursAndMinutes(duration)}</Text>
      </View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={handleRegion(startPoint)}
      >
        <Marker coordinate={handleRegion(startPoint)} title={'Departure'} />
        <Marker coordinate={handleRegion(arrivalPoint)} title={'Arrival'} />
        <MapViewDirections
          origin={startPoint}
          destination={arrivalPoint}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={COLORS.blue}
          onReady={(result) => {
            setDistance(result.distance);
            setDuration(result.duration);
          }}
        />
      </MapView>
    </SafeAreaView>
  );
};

export default Maps;
