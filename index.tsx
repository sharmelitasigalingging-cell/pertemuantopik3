import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

// Data produk — tinggal edit di sini kalau mau tambah/ganti
const PRODUCTS = [
  { id: '1', name: 'Headphones', price: 'Rp 450.000', emoji: '🎧', color: '#1a1a2e', hasDiscount: true },
  { id: '2', name: 'Keyboard',   price: 'Rp 320.000', emoji: '⌨️', color: '#162e16', hasDiscount: false },
  { id: '3', name: 'Mouse',      price: 'Rp 180.000', emoji: '🖱️', color: '#2e1616', hasDiscount: false },
  { id: '4', name: 'LED Strip',  price: 'Rp 95.000',  emoji: '💡', color: '#1a1a2e', hasDiscount: false },
];

// Komponen Card produk — reusable
function ProductCard({ name, price, emoji, color, hasDiscount }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      {/* Badge Diskon — Absolute Position */}
      {hasDiscount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>20% OFF</Text>
        </View>
      )}
      <Text style={styles.cardEmoji}>{emoji}</Text>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
    </View>
  );
}

export default function DashboardScreen() {
  // Bagi produk menjadi 2 baris (setiap baris 2 produk)
  const row1 = PRODUCTS.slice(0, 2);
  const row2 = PRODUCTS.slice(2, 4);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
          <Text style={styles.headerSubtitle}>{PRODUCTS.length} products available</Text>
        </View>

        {/* GRID PRODUK */}
        <View style={styles.grid}>
          <View style={styles.row}>
            {row1.map(p => <ProductCard key={p.id} {...p} />)}
          </View>
          <View style={styles.row}>
            {row2.map(p => <ProductCard key={p.id} {...p} />)}
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.onlineDot} />
          <Text style={styles.footerText}>Online · v1.0.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  scroll: {
    flexGrow: 1,
  },

  // ── HEADER ──────────────────────────────────
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1e1e1e',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#555555',
    fontSize: 13,
    marginTop: 4,
  },

  // ── GRID ────────────────────────────────────
  grid: {
    padding: 16,
    gap: 12,          // jarak antar baris
  },
  row: {
    flexDirection: 'row',
    gap: 12,          // jarak antar kolom
  },

  // ── CARD ────────────────────────────────────
  card: {
    flex: 1,          // supaya 2 card terbagi rata dalam 1 baris
    borderRadius: 16,
    padding: 14,
    minHeight: 140,
    justifyContent: 'flex-end',
    position: 'relative',  // diperlukan untuk badge absolute
    overflow: 'hidden',
  },
  cardEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cardPrice: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    marginTop: 2,
  },

  // ── BADGE (ABSOLUTE POSITION) ────────────────
  discountBadge: {
    position: 'absolute',  // lepas dari flow layout
    top: 10,
    right: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // ── FOOTER ──────────────────────────────────
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#1e1e1e',
    marginTop: 8,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#30d158',
    marginRight: 6,
  },
  footerText: {
    color: '#444444',
    fontSize: 12,
  },
});