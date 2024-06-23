import { useInfoStore } from './userInfoStore';

describe('useInfoStore', () => {
  it('should initialize with userInfo as null', () => {
    const store = useInfoStore.getState();
    expect(store.userInfo).toBeNull();
  });

  it('should save user details', () => {
    const store = useInfoStore.getState();
    const userDetails = {
      firstName: "Sirajudeen",
      lastName: "Zaman",
      email: "siraj.z@example.com"
    };
    
    store.save(userDetails);
    expect(store.userInfo).toEqual(userDetails);
  });

  it('should clear userInfo', () => {
    const store = useInfoStore.getState();
    const userDetails = {
      firstName: "Sirajudeen",
      lastName: "Zaman",
      email: "siraj.z@example.com"
    };
    
    store.save(userDetails);
    store.userInfoClear();
    expect(store.userInfo).toBeNull();
  });
});
